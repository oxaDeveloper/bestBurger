import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbzgYFdE5h23ukfujtR7Cp7SkdBQ6DbXM",
  authDomain: "bestborger.firebaseapp.com",
  projectId: "bestborger",
  storageBucket: "bestborger.appspot.com",
  messagingSenderId: "952552218102",
  appId: "1:952552218102:web:243524eec1f2612953bbd7",
  measurementId: "G-0E75PT5GJQ",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
