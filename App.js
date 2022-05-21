/** @format */
import { LogBox } from "react-native";
import Navigation, { SignedInStack, SignedOutStack } from "./Navigation";
import ContextWrapper from "./context/ContextWrapper";

export default function App() {
  LogBox.ignoreLogs([
    "Setting a timer",
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'",
  ]);

  return (
    <ContextWrapper>
      <Navigation />
    </ContextWrapper>
  );
}
