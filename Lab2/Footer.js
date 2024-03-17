import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = ({footerInfo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{footerInfo}</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20
    }
})