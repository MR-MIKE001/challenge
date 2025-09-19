import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

function TextBox() {
  
    return (
    <View style={styles.container}>
      <Text style={styles.text}>stunning promotion image of delicious decorated cake, 
        emphasizing its layers, frosting, and toppings in an enticing setting. 
      </Text>
      <View
      style={styles.icon}><Ionicons name="image" color="white" size={30}/></View>
        <View>
            
        </View>
    </View>
  )
}

const styles=StyleSheet.create({

    text:{
        color:"white"
    },
    container:{
        flex:1,
        borderRadius:"5%",
        padding:20,
        backgroundColor:"#2f2f2f"
    },
    icon:{
        marginTop:30,
        marginLeft:240,

    }

})




export default TextBox