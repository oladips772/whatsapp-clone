/** @format */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useState } from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { auth, db, storage } from "../firebase";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import {
  getDownloadURL,
  uploadString,
  ref,
  uploadBytes,
} from "firebase/storage";

const ProfileScreen = ({ window }) => {
  const user = auth.currentUser;
  const [image, setImage] = useState("");
  const [displayName, setDisplayName] = useState("");

  const pickImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(image);
    }
    console.log(image);
  };

  const createProfile = async () => {
    if (!image) return;
    const userRef = await addDoc(collection(db, "users"), {
      displayName: displayName,
      email: user.email,
    });

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const imageRef = ref(storage, `users/${userRef.id}/images`);
    await uploadBytes(imageRef, blob, {
      contentType: "image/jpeg",
    });
    await updateDoc(userRef, {
      profileImage: await getDownloadURL(imageRef),
    });
    await updateProfile(user, {
      displayName: displayName,
      photoURL: await getDownloadURL(imageRef),
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar color="white" />
      <View style={{ marginTop: -100 }}>
        <Text style={tw`text-green-400 mb-2 text-2xl text-center`}>
          Profile Info
        </Text>
        <Text style={tw`text-green-400 mb-2`}>
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
          marginTop: 10,
        }}
      />
      <TouchableOpacity disabled={!displayName} onPress={createProfile}>
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
