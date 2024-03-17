import {StyleSheet, Text, View, ViewToken, FlatList } from 'react-native'
import React from 'react'
import Animated , { useAnimatedStyle, useSharedValue, withTiming }from 'react-native-reanimated'

const Bai2 = () => {
    
    const data = Array.from({length:50},(_,index)=>({key: index}))

    const viewItems = useSharedValue([])

    const ListItem = React.memo(({item, viewAbleItem})=>{
        const rStyle = useAnimatedStyle(()=>{
            const isVisible = Boolean(
                viewAbleItem.value
                .filter((item) => item.isViewable)
                .find(viewAbleItem => viewAbleItem.item.key === item.key)
            ) 
            return{
              opacity: withTiming(isVisible ? 1 : 0),
              transform: [{
                scale:withTiming(isVisible ? 1 : 0.6)
              }]
        }}, [])
        return(
            <Animated.View style={[styles.item, rStyle]}> 
                <Text>PH40935</Text> 
            </Animated.View>
        )
    })

    return (
      <View style={styles.container}>
          <FlatList
            data={data}
            onViewableItemsChanged={({viewableItems})=>{
                viewItems.value = viewableItems
            }}
            renderItem={({item})=><ListItem item={item} viewAbleItem={viewItems}></ListItem>}
            />
      </View>
    )
}

export default Bai2

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        padding:10
    }, 
    item:{
        width:'100%',
        height:50,
        backgroundColor:'lightblue', 
        marginTop:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },

})