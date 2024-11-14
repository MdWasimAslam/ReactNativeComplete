import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Example() {
  return (
    <SafeAreaView style={styles.safeArea}>
     <View style={styles.header}>
      <Text style={styles.text}>Header</Text>
     </View>
     <View style={styles.body}>
     <Text style={styles.text}>Body</Text>
     </View>
     <View style={styles.footer}>
     <Text style={styles.text}>Footer</Text>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
      height:100,
      width:'100%',
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'white',
      fontSize:30
    },
    body:{
      height:600,
      width:'100%',
      backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center'
    },
    footer:{
      height:100,
      width:'100%',
      backgroundColor:'green',
      justifyContent:'center',
      alignItems:'center'
    },
    
});
