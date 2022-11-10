// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbp8d5zDV91kIQwItmTJxN-dYIW-PtuZk",
  authDomain: "restaurant-ff471.firebaseapp.com",
  projectId: "restaurant-ff471",
  storageBucket: "restaurant-ff471.appspot.com",
  messagingSenderId: "965288687405",
  appId: "1:965288687405:web:ccacd5e88d773586aa45a4",
  measurementId: "G-GLRBX9Q4SR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth,db}