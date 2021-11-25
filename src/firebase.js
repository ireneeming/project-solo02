// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf82lkwNWj_WWDhn1ibr6uXJ4jPfB6q8c",
  authDomain: "hellowords-90064.firebaseapp.com",
  projectId: "hellowords-90064",
  storageBucket: "hellowords-90064.appspot.com",
  messagingSenderId: "145682447236",
  appId: "1:145682447236:web:53701b5153e9a1d9dd3bd1",
  measurementId: "G-RVQF9HR3D1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
