import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'

const Body = ({handleCallback}) => {

    const [name, setName] = useState('')

    const handleSubmit = useCallback((event)=>{
        handleCallback(event)
    }, [])

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={(e)=>{setName(e)}}/>
            <TouchableOpacity style={styles.buttons} onPress={()=>{handleSubmit(name)}}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:"center",
        padding:10
    },
    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        margin:10,
        borderRadius:10
    },
    buttons:{
        backgroundColor:'#B8F5FB',
        width:100,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
})