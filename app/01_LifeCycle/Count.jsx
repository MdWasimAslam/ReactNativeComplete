import { View, Text, Button } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Count = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component updated");
  }, [count]);

  useLayoutEffect(() => {
    console.log("Before Dom is updated");
  });

  return (
    <View>
      <Text style={{ color: "white", fontSize: 40 }}>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default Count;
