import { View, Text, Image } from "react-native";
import React from "react";

const Images = () => {
  return (
    <View>
      <Text style={{ color: "white" }}> Local Image</Text>
      {/* Using Images from localFile */}
      <Image
        source={require("../../assets/images/react-logo.png")}
        style={{
          height: 100,
          width: 100,
        }}
      />

      {/* Using Image from URL */}
      <Text style={{ color: "white" }}> url Image</Text>

      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{
          height: 100,
          width: 100,
        }}
        onError={()=>{ //This will be called when there is any error while loading the image
            console.log('Image has error')
        }}
        onLoad={()=>{ // This will be called when the image is loaded properly
            console.log('Image loaded successfully!')
        }}
      />

<Text style={{ color: "white" }}> GIF & WEBP are not supported by default on Android</Text>

    </View>
  );
};

export default Images;
