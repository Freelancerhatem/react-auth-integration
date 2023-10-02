import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD4EADTJPPyWQN4u6_NTcgmEA5GMr46nTQ",
  authDomain: "react-auth-integration-6dcb9.firebaseapp.com",
  projectId: "react-auth-integration-6dcb9",
  storageBucket: "react-auth-integration-6dcb9.appspot.com",
  messagingSenderId: "48572982496",
  appId: "1:48572982496:web:ac7014eb4e148c1d2d9c85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;