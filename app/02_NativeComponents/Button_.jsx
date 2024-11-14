import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button_ = () => {
  const onPressLearnMore = () => {
    console.log("Btn Pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Button_</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPressLearnMore}
      >
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  heading: {
    color: "white",
    marginBottom: 20,
    fontSize: 24,
  },
  button: {
    backgroundColor: "#841584", // Button color
    paddingVertical: 15,        // Vertical padding to make the button taller
    paddingHorizontal: 40,      // Horizontal padding to make the button wider
    borderRadius: 5,            // Rounded corners (optional)
    alignItems: "center",       // Center text horizontally
    width:200
  },
  buttonText: {
    color: "white", // Text color
    fontSize: 18,   // Text size
    fontWeight: "bold",
  },
});

export default Button_;
