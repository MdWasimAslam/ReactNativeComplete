import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Texts = () => {

  // Loading fonts for the component
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });


  return (
    <View>
      <Text
        style={{ fontFamily:'Roboto-Regular', fontSize: 40, color: "white" }}
      >
        Roboto Regular
      </Text>
    </View>
  );
};

export default Texts;
