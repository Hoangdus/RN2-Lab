import { StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions } from 'react-native'
import React, {useRef, useEffect} from 'react'
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const Bai1 = () => {

    const position = useRef(new Animated.ValueXY()).current;
    const windowHeight = Dimensions.get('window').height;

    const startAnimation = ()=>{
        Animated.timing(position, {
            toValue:{x:0, y: Math.floor(Math.random()*windowHeight/2)},
            duration:1000,
            useNativeDriver:false
        }).start()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>{startAnimation()}}>
                <Text style={styles.text}>
                    Move PH40935
                </Text>
            </TouchableOpacity>
            <Animated.View style={[styles.box, position.getLayout()]}></Animated.View>
        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:30
    },
    box:{
        width:50,
        height:50,
        borderRadius:10,
        backgroundColor:'aqua'
    },
    button:{
        backgroundColor:'blue',
        width:100,
        height:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    text:{
        color:'white',
        fontSize:16
    }
})