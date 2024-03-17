import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

const Bai2Lab1 = () => {

    const [expanded, setExpanded] = useState('')

    const toggle = (section) => {
        setExpanded(section === expanded ? '' : section)
    }

    const sections = [
        { key: 'schedule', title: 'Lịch trình', items: ['Địa điểm', 'Thời gian', 'Hình ảnh'] },
        { key: 'other', title: 'Other Section', items: ['Item 1', 'Item 2', 'Item 3'] },
    ];

  return (
    <View style={styles.container}>
        <Text style={{fontSize:30, width:'100%', textAlign:"center"}}>
            PH40953
        </Text>
        {sections.map(section=>(
            <View key={section.key}>
                <TouchableOpacity       
                    onPress={()=>{toggle(section.key)}}
                    style={[styles.sectionHeader, {backgroundColor: expanded === section.key? 'red':'tomato'}]}>
                    <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </TouchableOpacity>      

                {expanded === section.key && (
                    <View style={styles.itemContainer}>
                        {section.items.map((item, index)=>(
                            <View style={styles.item} key={index}>
                                {index == 2 && section.key == 'schedule' ? (
                                    <Image source={{ uri: 'https://gv.poly.edu.vn/images/logo.png' }} 
                                            style={styles.image}/>
                                ):(
                                    <Text>{item}</Text>
                                )}
                            </View>                
                        ))}
                    </View>
                )}
            </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      padding:10
    },
    sectionHeader: {
      padding: 10,
      backgroundColor: 'white',
    },
    sectionHeaderText: {
      fontWeight: 'bold',
      color:'white'
    },
    itemContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    item: {
      padding: 10,
      width: '50%',
      borderBottomWidth: 1,
      borderColor: 'lightgrey',
    },
    image: {
      width: '100%',
      height: 100,
    },
  });
  

export default Bai2Lab1