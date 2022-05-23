/** @format */
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChatHomeScreen</Text>
    </View>
  );
};

export default ChatHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
