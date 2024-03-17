import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({headerInfo}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userpfp} source={require('../images/user.png')}/>
      <View style={styles.textView}> 
            <Text style={styles.txtHello}>
                Chào Ngày Mới
            </Text>
            <Text style={styles.txtName}>
                {headerInfo}
            </Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row'
    },
    userpfp:{
        width:90,
        height:90,
        marginLeft:10,
        marginRight:10
    },
    txtHello:{
        fontSize:18,
    },
    txtName:{
        fontSize:18,
        fontWeight:'bold'
    }
})