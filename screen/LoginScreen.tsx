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
        <ImageBackground source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRcYFRcXFRcVFRcXFxUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRktLTc3KystKy03LSstLTctKystLTcrKystLS0tNysrKys3NystKysrNy0tLS0rLSs3K//AABEIASsAqAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACgQAQEAAQEGBgMBAQAAAAAAAAABESECMUFRYfBxgZGhscES0eHxA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4hNcTGvnr4z9M0QBVzp38oAXkWgF6dOBkhICLYFBfx0S0ICC2GARSFAOBlQQss89xSQBGrAGVMgAu0yCouAAADKKAQi+l+u/tMgQKZ0Axz0RagDSFBFlLFnXhOffEEkCAIpNe8NW3SY67tdQZq7MQoFABeG6b9/HwxyQAA9gAW9OfmyC1cTv7ZXamAEXBARr8739pF/LvAGmO+mnyyuUAFABbtd+yZ0wAjWd/sgIq2c+O71x+0Bra2bPbWbt0uM89WchAXLIAoAFJEa0xxzr4Y0x9ghRAVcpIAY9gXZxxBEWQAtXN3a4ZauNMXXjpu/YIiwoFXHX57/1PyuMcEBrv5SIoFoVAWN/9psy38bbOFs/G7tdM3GvVi1AUkMEBc7+vHVIFACQwASeRbxICCgEvAIARFQFMmDAGWpOPf8AWcAGIWkvPUtAXPpn/WQFIZARd670ABAWIsMgSc++6ACKQtzqCDX16+CSAGUAFiKBYsvPdpnH0mQAAAXZmayAtMgIu0gAuTJQAARVuZ/PD+oC77y+J6pIs5+xd+7AFvDvKWgCKGARYUAtNqGQCrYi2AyLkz3w9AQAAAGrd2n97+hABABYUAWm1O+9yFoBTKAKLaCZAAhkvRAVFygAAAAAuAEWRAFoaALsxBbtZxv00nhvxPO31BAQFyQ2eqAvfwBb6cuAL5pYACKgAAAAAAC5QBrBgygLS3Ov8npEWUEqAAACrKyoLhAAJUAAAAAAAAAahhYuEGUrTNUQAAACKjU2fbf64+4BEsAEFqAAAAAAAAA3FZ2bouygM1vb8fn7eYACgAAsRYCoIAAAAAAAAAAA1Ky1sglqLYgAAAACxFgKi2MgAAAAAAAAAANSsgAAAAAACyosBbGW2bAQAAAAAAAAAAAAAAAAABYgDbNqypQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==' }}style={styles.image}>
            <View style={styles.container}>
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/6681/6681204.png'}} style={styles.logo} />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su usuario" 
                    placeholderTextColor="#fff"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingresar contraseña"
                    placeholderTextColor="#fff"
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
        borderColor: '#fff',
        color:'#fff',
        borderRadius: 100
    },
    image:{
        flex:1,
        resizeMode:'cover',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
});
