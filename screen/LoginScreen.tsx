import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';




export default function LoginScreen({navigation}:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Inicio de sesión exitoso', '¡Bienvenido de nuevo!');
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      Alert.alert('Error al iniciar sesión', 'Por favor, verifica tus credenciales e inténtalo de nuevo.');
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6681/6681204.png' }} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      
      <Text style={styles.letras} >¿No tienes una cuenta?  <Text style={styles.registrate}  onPress={() => navigation.navigate('Registro')}>Regístrate</Text>  </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    borderRadius: 100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  letras:{
    marginTop: 10,
    color: 'white'
  },
  registrate:{
color: '#87CEFA'
  }
});
