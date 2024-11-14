import { View, Text,TextInput } from 'react-native'
import React from 'react'

const TextInputCompo = () => {
  return (
    <View>
      <Text style={{color:'white'}}>TextInput</Text>
      <TextInput style={{backgroundColor:'white',height:70,fontSize:35}} />
      <Text style={{color:'white'}}>Multiline input</Text>

      <TextInput
        style={{
          backgroundColor: 'white',
          fontSize: 35,
          minHeight: 140, // Added height to allow for multiple lines
          textAlignVertical: 'top', // Ensures text starts from the top
        }}
        multiline
        numberOfLines={20}
        placeholder='Placeholder....'
        placeholderTextColor={"grey"}
        editable={true} // this will disable the texxtField when false
      />

    </View>
  )
}

export default TextInputCompo