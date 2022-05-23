/** @format */
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { auth } from "../firebase";
import tw from "twrnc";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatHomeScreen from "./ChatHomeScreen";
import StatusScreen from "./StatusScreen";
import Calls from "./Calls";
import { AntDesign, Entypo } from "@expo/vector-icons";

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
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white" backgroundColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={tw`text-green-600 text-2xl p-4 font-bold m-2`}>
          Whatsapp
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={20} color="gray" style={tw`mr-6`} />
          <Entypo
            name="dots-three-vertical"
            size={20}
            color="gray"
            style={tw`mr-4`}
          />
        </View>
      </View>
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
