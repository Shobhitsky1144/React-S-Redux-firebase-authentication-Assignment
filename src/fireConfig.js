import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmXZIRYppzypwVWLlB1Ecq_YbIqyxhj7s",
  authDomain: "crud-firebase-dfb4b.firebaseapp.com",
  projectId: "crud-firebase-dfb4b",
  storageBucket: "crud-firebase-dfb4b.appspot.com",
  messagingSenderId: "202481391329",
  appId: "1:202481391329:web:c0dd0738fd528b959ec9a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export const storage = getStorage(app);

export default fireDB;
