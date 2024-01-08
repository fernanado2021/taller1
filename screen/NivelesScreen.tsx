import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function NivelesScreen({navigation}:any) {
  return (
    <TouchableOpacity >
        <Text style={styles.texto} onPress={() => navigation.navigate('JuegoFacil')}>JuegoFacil</Text>
        <Text style={styles.texto} onPress={() => navigation.navigate('JuegoMedio')}>JuegoMedio</Text>
        <Text style={styles.texto} onPress={() => navigation.navigate('JuegoExtremo')}>JuegoExtremo</Text>
      </TouchableOpacity>
      
      

      
  )
  
}

const styles = StyleSheet.create({
  container:{
      flex:1,
  },

  texto:{
    color: 'blue',
    textAlign: 'center', 
    fontSize: 25, 
    marginTop: 200, 
    fontFamily: 'algeria',
    
    
  }
})