import { View, Text, Dimensions } from "react-native";
import React from "react";

const FlexBox = () => {
  const screenHeight = Dimensions.get("window").height;
  const viewHeight = screenHeight / 3; // Divide screen height by 3
  return (
    <View style={{ flex: 1, flexDirection: "column", direction: "rtl" }}>
      <View style={{ backgroundColor: "orange", height: viewHeight }} />
      <View style={{ backgroundColor: "red", height: viewHeight }} />
      <View style={{ backgroundColor: "cyan", height: viewHeight }} />
    </View>
  );
};

export default FlexBox;
