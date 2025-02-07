import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e8da0.firebaseapp.com",
  projectId: "reactchat-e8da0",
  storageBucket: "reactchat-e8da0.firebasestorage.app",
  messagingSenderId: "326398207220",
  appId: "1:326398207220:web:ef7f1a2600d6ed549c2aa1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
