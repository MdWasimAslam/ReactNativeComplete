import { View, Text } from "react-native";
import React from "react";
import LifeCycleMain from "./01_LifeCycle/LifeCycleMain";
import NativeComponentsMain from "./02_NativeComponents/NativeComponentsMain";

const index = () => {
  return (
    <View>
      {/* <LifeCycleMain /> */}
      <NativeComponentsMain />
    </View>
  );
};

export default index;
