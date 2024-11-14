import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import  fruitsLists  from './DummyData/fruitsList';


const ScrollView_ = () => {


  return (
    <View>
      <Text style={{color:'white'}}>ScrollView_</Text> 
      <ScrollView
        
      
      >
        { // Scrollview renders all the elemnt at once which can be an issue to performance
            fruitsLists.map((item,index)=>{
                return(
                    <View style={{backgroundColor:'seagreen',margin:2}}>
                        <Text style={{color:'white',fontSize:25}} key={index}>{item}</Text>
                    </View>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default ScrollView_