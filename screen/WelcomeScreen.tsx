import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function WelcomeScreen({navigation}:any) {
  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/30/fd/55/30fd55b12707cb9cc75488ff77f8aa13.jpg'}} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.texto}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Niveles')}>
        <Text style={styles.texto}>TEST</Text>
      </TouchableOpacity>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
  },

  texto:{
    color: 'white',
    textAlign: 'center', 
    fontSize: 25, 
    marginTop: 250, 
    fontFamily: 'algeria',
    
    
  }
})