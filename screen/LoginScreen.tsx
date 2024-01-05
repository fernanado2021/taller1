import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const ingresar = () => {
        // Implementa lógica de autenticación aquí
    };

    return (
        <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/30/fd/55/30fd55b12707cb9cc75488ff77f8aa13.jpg' }}style={styles.image}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su usuario"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingresar contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Iniciar Sesion" onPress={ingresar} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    image:{
        flex:1,
        resizeMode:'cover',
    }
});
