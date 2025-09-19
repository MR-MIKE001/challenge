import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AdvanceScript: React.FC = () => {
  return (
   <View>
        <Text style={styles.text}>
            Go back to Smart Script
        </Text>
   </View>
  )
}
const styles=StyleSheet.create({
    text:{
         position:"absolute",
        color:"#b46868ff",
        
        left:50,
        fontSize:20,
        flex:1,
        width:300
    }
})

export default AdvanceScript
