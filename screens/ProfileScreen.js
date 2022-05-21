/** @format */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = () => {
  const [image, setImage] = useState("");
  const [displayName, setDisplayName] = useState("");

  const pickImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: -100 }}>
        <Text style={tw`text-green-400 mb-2 text-2xl text-center`}>
          Profile Info
        </Text>
        <Text style={tw`text-green-400`}>
          Please provide your name and optional profile photo
        </Text>
      </View>
      <TouchableOpacity
        onPress={pickImageHandler}
        style={tw`h-20 w-20 bg-gray-800 rounded-full text-center flex items-center justify-center mt-4`}
      >
        {!image ? (
          <MaterialCommunityIcons
            name="camera-plus"
            size={35}
            color="lightgray"
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 120 }}
          />
        )}
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="gray"
        placeholder="Enter your name"
        value={displayName}
        onChangeText={(val) => setDisplayName(val)}
        style={{
          borderBottomColor: "green",
          borderBottomWidth: 1,
          width: "87%",
          color: "lightgray",
          marginBottom: 15,
          padding: 5,
          fontSize: 18,
        }}
      />
      <TouchableOpacity>
        <Text
          style={tw`text-white bg-green-600 w-80 text-center p-2 rounded-sm font-bold mt-6`}
        >
          SAVE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
