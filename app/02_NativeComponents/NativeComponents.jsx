import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import sample1 from "../../assets/images/sample_1.jpg";
import { ImageBackground } from "react-native";

const NativeComponents = () => {
  const fruitsName = [
    "Apple",
    "Banana",
    "Cherry",
    "Dates",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Vanilla bean",
    "Watermelon",
    "Xigua",
    "Yuzu",
    "Zucchini",
    "Avocado",
    "Blackberry",
    "Cantaloupe",
    "Dragonfruit",
    "Eggplant",
    "Figs",
    "Grapes",
    "Honeydew",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Vanilla bean",
    "Watermelon",
    "Xigua",
    "Yuzu",
    "Zucchini",
    "Avocado",
    "Blackberry",
    "Cantaloupe",
    "Dragonfruit",
    "Eggplant",
    "Figs",
    "Grapes",
    "Honeydew",

  ];
  return (
    // <ScrollView>
    //   <ImageBackground source={sample1} style={{ flex: 1 }}>
    //     <Text style={{ color: "white" }}>NativeComponents</Text>
    //     <View
    //       on
    //       style={{
    //         height: 150,
    //         width: 150,
    //         backgroundColor: "yellow",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Text
    //         onLayout={
    //           (event) => console.log(event.nativeEvent) // onLayout event is used to get the information about the layout of the component
    //         }
    //         numberOfLines={1} // numberOfLines is used to set the number of lines to be displayed and then the rest of the text will be hidden
    //         style={{
    //           color: "black",
    //           fontSize: 20,
    //           borderWidth: 2,
    //           borderColor: "black",
    //         }}
    //       >
    //         Mangoooooooooooooos
    //       </Text>
    //     </View>
    //     <Image
    //       source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       style={{ height: 250, width: 250 }}
    //     />

    //     <Image
    //       source={sample1}
    //       style={{ height: 250, width: 250 }}
    //       resizeMode="cover" // resizeMode is used to set the image size in the container
    //       backgroundColor="red"
    //     />
    //     <Text>Inside</Text>
    //   </ImageBackground>
    // </ScrollView>

    <View>
      <FlatList 
      style={{backgroundColor: 'lightblue'}}
      data={fruitsName}
      windowSize={3} // windowSize is used to set the number of items to be rendered at a time
      key={(item, index) => index} // key is used to set the key for the items
      keyExtractor={(item, index) => index.toString()}   // keyExtractor is used to set the key for the items
      renderItem={({item}) => (
        <Text style={{fontSize: 25, color: 'black'}}>{item}</Text>
      )}
      />
    </View>
  );
};

export default NativeComponents;
