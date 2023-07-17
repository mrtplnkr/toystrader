//https://toystrader-a494f.firebaseapp.com/__/auth/handler

import { auth, googleProvider, facebookProvider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

function Auth() {

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
        .then((res) => console.log('facebook authprovider', res))
        .catch((err) => console.log('facebook newschool error', err));
    } catch (err) {
      console.error('facebook oldschool error', err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
        .then((res) => console.log('google authprovider', res))
        .catch((err) => console.log('google newschool error', err));
    } catch (err) {
      console.error('google oldschool error', err);
    }
  };
  return (
    <div className="Auth">
      <header className="Auth-header">
        <button style={{background: "blue"}} onClick={signInWithFacebook}> Sign In With Facebook</button>
        <button  style={{background: "green"}} onClick={signInWithGoogle}> Sign In With Google</button>
      </header>
    </div>
  );
}

export default Auth;
