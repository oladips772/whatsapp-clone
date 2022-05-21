/** @format */
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  ToastAndroid,
  Alert,
} from "react-native";
import tw from "twrnc";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SIGNUP = async () => {
    await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
      alert(err)
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="white" />
      <View style={styles.container}>
        <Text style={tw`text-green-600 text-2xl font-bold mb-6`}>
          Welcome to Whatsapp
        </Text>
        <Image
          source={{
            uri: "https://pnggrid.com/wp-content/uploads/2021/04/whatsapp-logo-1024x1024.png",
          }}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholderTextColor="gray"
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)}
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
        <TextInput
          placeholderTextColor="gray"
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
          style={{
            borderBottomColor: "green",
            borderBottomWidth: 1,
            width: "87%",
            color: "lightgray",
            marginBottom: 23,
            padding: 5,
            fontSize: 18,
          }}
        />
        <TouchableOpacity onPress={SIGNUP}>
          <Text
            style={tw`text-white bg-green-800 w-80 text-center p-2 rounded-sm font-bold mt-6`}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
        <View style={styles.registerLink}>
          <Text style={tw`text-gray-300 rounded-sm font-bold mt-2`}>
            already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={tw`text-green-600 ml-2 mt-2 font-bold`}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerLink: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
