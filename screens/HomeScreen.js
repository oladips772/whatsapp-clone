/** @format */
import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import { auth } from "../firebase";

const HomeScreen = () => {
  const user = auth.currentUser;
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{user.displayName}</Text>
      <Image source={{uri:user?.photoURL}} style={{width:100,height:100}}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
