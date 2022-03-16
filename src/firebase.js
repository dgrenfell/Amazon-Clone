import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdvtQ7B1XBVozada5vdoC5CyLYLd4uHFw",
  authDomain: "clone-1dd14.firebaseapp.com",
  projectId: "clone-1dd14",
  storageBucket: "clone-1dd14.appspot.com",
  messagingSenderId: "527150069435",
  appId: "1:527150069435:web:12ada82d7b1b991b8b9b9e",
  measurementId: "G-RLWWX43C0Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
