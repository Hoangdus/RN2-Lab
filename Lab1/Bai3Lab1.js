import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// import TextInputLayout from './TextInputLayout';

const TextInputLayout = ({label, placeholder, onChangeText, value})=>{
    return(
        <View style={styles.textinputcontainer}>
            <Text style={styles.textinputlabel}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={styles.input}/>
        </View>
    )
}

const TextInputLayoutError = ({label, placeholder, onChangeText, value, errorText})=>{
    return(
        <View style={styles.textinputcontainer}>
            <Text style={styles.textinputlabel}>{label}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                style={styles.input}
                onChangeText={onChangeText}/>
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    )
}

const Bai3Lab1 = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [error, setError] = useState('');

    return (
        <View style={{padding:10}}>
            <Text style={{width:'100%', textAlign:'center', fontSize:30}}>
                PH40935
            </Text>
            <TextInputLayout
                label='Text 1'
                placeholder='Text 1'
                onChangeText={setText1}
                value={text1}/>
            <TextInputLayout
                label='Text 2'
                placeholder='Text 2'
                onChangeText={setText2}
                value={text2}/>
            <TextInputLayoutError
                label='Text 3'
                placeholder='Text 3'
                onChangeText={setText3}
                value={text3}
                errorText={text3 ? null : 'NHẬP THÔNG TIN'}/>
        </View>
    )
}

export default Bai3Lab1

const styles = StyleSheet.create({
    textinputcontainer: {
        marginBottom: 20,
    },
    textinputlabel: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    error: {
        color: 'red',
        fontSize: 14,
    },
})