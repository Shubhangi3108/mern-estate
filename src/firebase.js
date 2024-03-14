// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ea19d.firebaseapp.com",
  projectId: "mern-estate-ea19d",
  storageBucket: "mern-estate-ea19d.appspot.com",
  messagingSenderId: "268668459880",
  appId: "1:268668459880:web:b9f93451673d82091ed4dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);