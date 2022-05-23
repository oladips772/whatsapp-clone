/** @format */
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";
import { auth } from "../firebase";
import tw from "twrnc";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ChatHomeScreen from "./ChatHomeScreen";
import StatusScreen from "./StatusScreen";
import Calls from "./Calls";

const Tab = createMaterialTopTabNavigator();

const NavigationCont = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 15,
          color: "gray",
        },
        tabBarStyle: { backgroundColor: "black" },
        tabBarIndicatorStyle: { backgroundColor: "green" },
      }}
    >
      <Tab.Screen name="Chats" component={ChatHomeScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  const user = auth.currentUser;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white" backgroundColor="black" />
      <Text style={tw`text-green-600 text-2xl p-4 font-bold m-2`}>
        Whatsapp
      </Text>
      <NavigationCont />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
