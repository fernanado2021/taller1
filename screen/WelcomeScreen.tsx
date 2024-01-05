import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WelcomeScreen({navigation}:any) {
  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/30/fd/55/30fd55b12707cb9cc75488ff77f8aa13.jpg'}} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 650, fontFamily: 'algeria' }}>INGRESAR</Text>
      </TouchableOpacity>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      resizeMode:'cover',
  }
})