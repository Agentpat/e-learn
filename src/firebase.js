
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Add this import for Firestore

const firebaseConfig = {
  apiKey: "AIzaSyARcM3B95adLITNiwuJH4Q1x7H9_-Nl1AY",
  authDomain: "learnify-95d61.firebaseapp.com",
  projectId: "learnify-95d61",
  storageBucket: "learnify-95d61.appspot.com",
  messagingSenderId: "808810884807",
  appId: "1:808810884807:web:7fd417ab59c8bee79398e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Initialize Firestore


