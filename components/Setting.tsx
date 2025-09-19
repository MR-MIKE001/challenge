import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
type settingprops={
    text1:string;
    text2:string;
    text3:string;
    text4:string;
}
const Setting :React.FC<settingprops> = ({text1,text2,text3,text4}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textB}>Settings</Text>
       <View style={styles.settinhg}>
         <View style={[styles.textWrapper]}>
        <Text style={[styles.text,{ color:"#f3eaeaff"}]}>{text1}</Text>
       <View style={[styles.setWrapper,{marginLeft:80}]}>
             <Text style={[styles.text]}>{text2}</Text>
             <Ionicons name="arrow-forward" color="#cfc5c5ff" size={20}/>

       </View>
       </View>
       <View style={styles.textWrapper2}></View>
       <View style={styles.textWrapper}>
        <Text style={[styles.text,{ color:"#f3eaeaff"}]}>{text3}</Text>
         <View style={styles.setWrapper} >
             <Text style={[styles.text]}>{text4}</Text>
             <Ionicons name="arrow-forward" color="#cfc5c5ff" size={20}/>

       </View>
       </View>
       </View>
    </View>
  )
}

const styles=StyleSheet.create({
    text:{
       
        fontSize:18,
      color:"#cfc5c5ff"
    },
    textB:{
        color:"#776f6fff",
        fontSize:25,
        paddingBottom:7
        

    },
    setWrapper:{
        flexDirection:"row",
        gap:6
    }
    ,
    container:{
        
    },
    textWrapper:{
        flexDirection:"row",
        gap:40,
        
        paddingLeft:15,
        paddingTop:20,
        paddingRight:100,
        paddingBottom:20,
        
    },
    textWrapper2:{
     borderBottomColor:"#3a3636ff",
     borderBottomWidth: 2,
     width:"80%",

     marginLeft:"auto",
     marginRight:"auto"
    
    },
    settinhg:{
        backgroundColor:"#2f2f2f",
        borderRadius:"5%",
        
        
    }
})
export default Setting