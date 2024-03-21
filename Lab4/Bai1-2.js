import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'

const Bai1 = () => {

    const [imageURI, setImage] = useState(null)

    const commonOption = {
        mediaType:'photo',
        maxWidth:500,
        maxHeight:500, 
    }

    const cameraOption = {
        ...commonOption,
        saveToPhoto: false,
        cameraType:'front'
    }

    const libraryOption = {
        ...commonOption,
        selectionLimit:1
    }
    
    const openLibrary = async ()=>{
        const result = await launchImageLibrary(libraryOption)
        if(result?.assets){
            setImage(result.assets[0].uri)
        }else{
            console.log(result.errorCode)
        }
    }

    const openCamera = async ()=>{
        const result = await launchCamera(cameraOption)
        if(result?.assets){
            setImage(result.assets[0].uri)
        }else{
            console.log(result.errorMessage)
        }
    }

    return (
        <View style={styles.container}>
        {/* <Image style={styles.image} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'}}/> */}
        <Image style={styles.image} source={{uri:imageURI ? imageURI:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'}}/>
            <TouchableOpacity style={styles.button} onPress={()=>{openCamera()}}>
                <Text style={{color:'white'}}>
                    Lấy ảnh từ camera PH40935
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{openLibrary()}}>
                <Text style={{color:'white'}}>
                    Lấy ảnh từ thư viên PH40935
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:200,
        height:200, 
        borderRadius:10
    },
    button:{
        backgroundColor:'orange',
        width:200,
        height:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:10
    }
})