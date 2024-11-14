import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Stylesheet = () => {
  return (
    <View style={{alignItems:'center',marginTop:140}}>
     <View style={styles.container}>
     <Text style={styles.title}>Stylesheet</Text>
     </View>
    </View>
  )
}

export default Stylesheet;



const styles = StyleSheet.create({
    title:{
        color:"white",
        fontSize:40,
        padding:20
    },
    container:{
        borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    width:300
    
    }
})