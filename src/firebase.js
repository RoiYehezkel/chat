import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgaauRbzRY6IyrgRolz9xLMc-DTiv7f_8",
  authDomain: "chat-47246.firebaseapp.com",
  projectId: "chat-47246",
  storageBucket: "chat-47246.appspot.com",
  messagingSenderId: "227006346009",
  appId: "1:227006346009:web:cab297a3b3db5a75c94b88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
