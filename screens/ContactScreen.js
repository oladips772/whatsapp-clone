/** @format */
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import tw from "twrnc";

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white" backgroundColor="black" />
      <View style={[styles.header, tw`shadow`]}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={tw`ml-4 p-2 -mr-2 font-bold`}
          onPress={() => navigation.goBack()}
        />
        <Text style={tw`text-gray-500 text-xl font-bold text-center`}>
          Select Contacts
        </Text>
        <AntDesign name="search1" size={20} color="gray" style={tw`mr-6`} />
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "black",
    paddingTop: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
