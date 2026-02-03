import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSOdWZA5K2lGkk2cAeAkFPlOoxotD__S8",
  authDomain: "signuplogin-4664a.firebaseapp.com",
  projectId: "signuplogin-4664a",
  storageBucket: "signuplogin-4664a.firebasestorage.app",
  messagingSenderId: "598006304340",
  appId: "1:598006304340:web:f693c315e9a07c1b69a7c1",
  measurementId: "G-7Z8H3E3W5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

export { app, db, analytics };
