import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAssV2Pa71tDbVpaaZx3XWA90dPio8KmkI",
    authDomain: "chat-app-91719.firebaseapp.com",
    projectId: "chat-app-91719",
    storageBucket: "chat-app-91719.appspot.com",
    messagingSenderId: "563410994859",
    appId: "1:563410994859:web:72bd5fc180460f431219ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
