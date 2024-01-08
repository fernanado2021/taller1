import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const JuegoScreenExtremo: React.FC = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [objectSize, setObjectSize] = useState(50);
  const [lives, setLives] = useState(3);
  const [missedClicks, setMissedClicks] = useState(0);

  const objectRef = useRef<any>();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const moveObject = () => {
      const randomX = Math.floor(Math.random() * (screenWidth - objectSize));
      const randomY = Math.floor(Math.random() * (screenHeight - objectSize));

      setPosition({ x: randomX, y: randomY });

      if (missedClicks === 1) {
        setLives(prevLives => (prevLives > 0 ? prevLives - 1 : prevLives));
        setMissedClicks(0);
      } else {
        setMissedClicks(prevMissedClicks => prevMissedClicks + 1);
      }
    };

    
//VELOCIDAD DEL OBJETO
    const interval = setInterval(moveObject, 200);

    return () => clearInterval(interval);
  }, [objectSize, missedClicks]);

  const handleObjectPress = () => {
    setScore(prevScore => prevScore + 1);
    setMissedClicks(0);
  };

  useEffect(() => {
    if (lives === 0) {
      endGame();
    }
  }, [lives]);

  const endGame = () => {
    Alert.alert('Juego finalizado', `Puntuación final: ${score}`, [
      { text: 'OK', onPress: () => resetGame() },
    ]);
  };

  const resetGame = () => {
    setScore(0);
    setLives(3);
  };

  const objectStyle = {
    width: objectSize,
    height: objectSize,
    backgroundColor: 'red',
    position: 'absolute',
    top: position.y,
    left: position.x,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Puntuación: {score}</Text>
      <Text style={styles.livesText}>Vidas: {lives}</Text>
      <TouchableOpacity
        style={objectStyle}
        onPress={handleObjectPress}
        ref={objectRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 10,
  },
  livesText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default JuegoScreenExtremo;
