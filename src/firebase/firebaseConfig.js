// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

import 'firebase/auth';
import 'firebase/firestore';

import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
      apiKey: "AIzaSyDL9XbYkjMY4zM0UtQvepkjnFKmPk49e_4",
      authDomain: "react-journal-app-5dadd.firebaseapp.com",
      projectId: "react-journal-app-5dadd",
      storageBucket: "react-journal-app-5dadd.appspot.com",
      messagingSenderId: "277419459957",
      appId: "1:277419459957:web:67e5a822f23bd83e6e3f3c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export {
      db,
      googleAuthProvider
}