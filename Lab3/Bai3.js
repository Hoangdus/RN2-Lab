import { FlatList, ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState } from 'react'

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 80

const Bai3 = () => {

    const [animation] = useState(new Animated.Value(HEADER_MAX_HEIGHT))
    const [scale] = useState(new Animated.Value(1))

    const headerShrink = ()=>{
        Animated.spring(animation, {
            toValue: HEADER_MIN_HEIGHT,
            bounciness:0,
            useNativeDriver:false
        }).start()
    }

    const shrink = ()=>{
        Animated.spring(scale,{
            toValue: 0,
            bounciness:0,
            useNativeDriver:false
        }).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, {height:animation}]}>
                <Animated.Image source={require('../images/user.png')} style={[styles.image, {transform:[{scaleX:scale},{scaleY:scale}]}]}>

                </Animated.Image>
                <Animated.Text style={[styles.title, {transform:[{scaleX:scale},{scaleY:scale}]}]}>
                    PH40935
                </Animated.Text>
            </Animated.View>
            <ScrollView style={styles.scrollView} onScroll={()=>{headerShrink(); shrink()}}>
                <View style={styles.item}>
                    <Text style={styles.title}>
                        PH40935
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>
                        PH40935
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>
                        PH40935
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>
                        PH40935
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>
                        PH40935
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Bai3

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    },
    header:{    
        backgroundColor:'#03A9F4',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        width:'100%',
        height:150,
        backgroundColor:'lawngreen',
        marginTop:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    scrollView:{
        padding:10
    },
    image:{
        width:150,
        height:150,
    },
    title:{
        fontSize:20,
        color:'white',
        fontWeight:'600'
    }
})