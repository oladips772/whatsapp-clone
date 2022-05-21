/** @format */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCysmF9veIeZuZSiblbR-2YfeGFDJvxYTg",
  authDomain: "whatsapp-clone-react-nat-6d252.firebaseapp.com",
  projectId: "whatsapp-clone-react-nat-6d252",
  storageBucket: "whatsapp-clone-react-nat-6d252.appspot.com",
  messagingSenderId: "522035810047",
  appId: "1:522035810047:web:1f6fd1599867a7e1ce06ca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const storage = getStorage(app);

export { auth, db, storage };
