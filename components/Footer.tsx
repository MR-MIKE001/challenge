import { View,Image, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={require('../assets/capcut2.png')} style={styles.img}/>
      </View>
      <View style={styles.wrapper}>
        <Text style={{color:"#daccccff"}}>Curated By</Text>
        <Image source={require('../assets/mob2.png')} style={styles.img}/>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    text:{
        color:"white"
    },
    container:{
        paddingLeft:15,
        flexDirection:"row",
        color:"white",
        backgroundColor:"#2f2f2f",
         height:50,
         gap:70
    },
    wrapper:{
      flexDirection:"row",
       paddingTop:10,
       paddingBottom:20
    },
    img:{
        width:90,
        height:20
        
    }

})

export default Footer