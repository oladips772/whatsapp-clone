/** @format */
import { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import tw from "twrnc";

const SplashScreen = ({ navigation }) => {
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigation.navigate("Login");
        }
      }),
    [auth]
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="white" />
      <Image
        source={{
          uri: "https://pnggrid.com/wp-content/uploads/2021/04/whatsapp-logo-1024x1024.png",
        }}
        style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />
      <Text style={tw`text-gray-500 mt-20 text-lg`}>by Korede</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
