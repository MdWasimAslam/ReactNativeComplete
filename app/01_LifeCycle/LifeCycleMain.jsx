import { View, Text } from "react-native";
import React, { useState } from "react";
import Count from "./Count";
import { Button } from "react-native";
const LifeCycleMain = () => {
  const [showCount, setshowCount] = useState(true);
  return (
    <View>
      <Text style={{ color: "white" }}>LifeCycle</Text>
      <Button title="btnDemo" onPress={() => console.log('btn pressed')} />
      <Button title="toggleCount" onPress={() => setshowCount(!showCount)} />
      {showCount && <Count />}
    </View>
  );
};

export default LifeCycleMain;
