import React, {useState} from "react";
import "../styles/sign.css";
import { signInWithGoogle } from "./firebase.js";
import { FcGoogle } from "react-icons/fc";



export default function SignIn() {
  return (
      <div className="buttonContainer">
        <button className="signButton" onClick={signInWithGoogle}>{<FcGoogle/>} Sign In with Google </button>
      </div>
    );
  }