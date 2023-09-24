import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDOCXsQKg9QGI-4mk0eflJhCWaRLuE9qyM",
  authDomain: "devrev-task-b8922.firebaseapp.com",
  databaseURL: "https://devrev-task-b8922-default-rtdb.firebaseio.com",
  projectId: "devrev-task-b8922",
  storageBucket: "devrev-task-b8922.appspot.com",
  messagingSenderId: "364920585767",
  appId: "1:364920585767:web:ac6317d794260b29ab5802",
  measurementId: "G-HH4R916VHY"
};

const app = firebase.initializeApp(firebaseConfig);
//var database = firebase.database();


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const fullName = user.displayName;
      const len = fullName.length;
      const email = user.email;

        const userName = fullName.slice(0, len - 11);
        const fName = userName.split(" ")[0];
        localStorage.setItem("userName", userName);
        localStorage.setItem(
          "fname",
          fName.charAt(0) + fName.slice(1).toLowerCase()
        );
        localStorage.setItem("id", fullName.slice(len - 10));
        localStorage.setItem("email", email);
        localStorage.setItem("photo", user.photoURL);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sign_out = () => {
  auth.signOut();
  localStorage.clear();
};

const db = app.firestore();

export { auth, signInWithGoogle, sign_out as signOut, db };
//export default database;
