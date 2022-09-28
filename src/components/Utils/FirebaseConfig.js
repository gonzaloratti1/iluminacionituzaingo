// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1oprBukeTpkN-juPTyju3kbZMHbVlz7E",
  authDomain: "ituzaingo-shop.firebaseapp.com",
  projectId: "ituzaingo-shop",
  storageBucket: "ituzaingo-shop.appspot.com",
  messagingSenderId: "112879623323",
  appId: "1:112879623323:web:743b9db25cd923a6cc3a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;