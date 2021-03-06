/** @format */
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProfileScreen from "./screens/ProfileScreen";
import SplashScreen from "./screens/SplashScreen";
import ContactScreen from "./screens/ContactScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      }),
    [currentUser, auth]
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {currentUser ? (
          <>
            {!currentUser.displayName && (
              <Stack.Screen name="Profile" component={ProfileScreen} />
            )}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Contacts" component={ContactScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
