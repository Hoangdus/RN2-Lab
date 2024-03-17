import { View, Text, Dimensions, TouchableOpacity, StyleSheet, SectionList } from 'react-native'
import React, { useState } from 'react'
import { create } from 'react-test-renderer';

const {width, height} = Dimensions.get('window');

const Bai1Lab1 = () => {

    const [expanded, setExpanded] = useState('')
    
    const toggle = (section)=>{
        setExpanded(section === expanded ? '': section) 
    }

    const sections = [
        {
          title: 'Left Component',
          data: [{ key: 'left ' }],
          expanded: expanded === 'left',
        },
        {
          title: 'Center Component',
          data: [{ key: 'center' }],
          expanded: expanded === 'center',
        },
        {
          title: 'Right Component',
          data: [{ key: 'right' }],
          expanded: expanded === 'right',
        },
      ]

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity
                onPress={()=>{toggle(item.key)}}
                style={[styles.item, {height: item.key === expanded ? height*0.5 : height/5}]}>
                    <Text>
                        {item.key}
                    </Text>
            </TouchableOpacity>
        )
    }

    const itemHeader = ({section})=>{
        return(
            <Text style={styles.sectionHeader}>{section.title}</Text>
        )
    }

  return (

    <View style={styles.container}>
        <Text style={styles.text}>
            PH40935
        </Text>
        <SectionList
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={itemHeader}
            keyExtractor={(item, index)=>index.toString()}
            horizontal={false}>

        </SectionList>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:10,
    },
    text:{
        width:'100%',
        fontSize:20,
        textAlign:'center'   
    },  
    sectionHeader: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
      },
    item: {
        padding: 10,
        backgroundColor: 'tomato',
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
})

export default Bai1Lab1