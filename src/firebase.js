// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2b4y6IBc_nJGHcOS8HOKtlozeLEszpyk",
  authDomain: "prueba2-f3166.firebaseapp.com",
  projectId: "prueba2-f3166",
  storageBucket: "prueba2-f3166.appspot.com",
  messagingSenderId: "1004713646079",
  appId: "1:1004713646079:web:d2cbae7da2ace68421b9ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
