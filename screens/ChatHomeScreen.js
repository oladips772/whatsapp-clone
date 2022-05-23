/** @format */
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { query, onSnapshot, collection, where, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

const ChatHomeScreen = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);
  const currentUser = auth.currentUser;
  const chatRef = collection(db, "rooms");
  const chatQuery = query(
    chatRef,
    where("participantsArray", "array-contains", currentUser.email)
  );

  useEffect(
    () => () => {
      onSnapshot(chatQuery, (snapshot) => {});
    },
    []
  );

  return (
    <View style={styles.container}>
      <Text style={tw`text-lg p-4 text-gray-400`}>ChatHomeScreen</Text>
      <TouchableOpacity
        style={styles.floatBtn}
        onPress={() => navigation.navigate("Contacts")}
      >
        <MaterialCommunityIcons
          style={{ transform: [{ scale: -1 }, { rotateX: "180deg" }] }}
          name="android-messages"
          size={25}
          color="lightgray"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  floatBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 14,
    backgroundColor: "darkgreen",
    borderRadius: 120,
    zIndex: 999,
  },
});
