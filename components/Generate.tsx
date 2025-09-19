import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Generate : React.FC= () => {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.cycleWrapper}>
             <Ionicons name="radio-button-on" color="blue" size={20}/>
       </View>
      <Text style={styles.text}>Generate</Text>
        </View>

        <View style={styles.line}>

        </View>
       
      
    </View>
  )
}

const styles=StyleSheet.create({
    line:{
        borderBottomColor:"#daccccff",
        borderWidth:5,
        marginTop:30,
        marginBottom:10,
        
        width:"50%",
        marginLeft:"auto",
        marginRight:"auto",
    }
    ,
    container:{
        
        
       
    },
    text:{
        color:"black",
        fontWeight:"bold",
        fontSize:18,
       

    },
    wrapper:{
        flexDirection:"row",
         paddingLeft:100,
        paddingRight:100,
        gap:8,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:"white",
        borderRadius:"5%",
    },
    cycleWrapper:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:"#c0e2f1ff",
        alignItems:"center",
        justifyContent:"center",

    }
})

export default Generate