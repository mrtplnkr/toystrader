//https://toystrader-a494f.firebaseapp.com/__/auth/handler
import React, { useEffect, useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

function Auth() {

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);

  const [menu, openMenu] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (res) => {
      setUser({ displayName: res.displayName, photoURL: res.photoURL });
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider)
        .then((res) => {
          setUser({displayName: res.user.displayName, photoURL: res.user.photoURL});
          setLoading(false);
        })
        .catch((err) => console.log('google auth error', err));
    } catch (err) {
      console.error('google error', err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
        .then((res) => console.log('facebook authprovider', res))
        .catch((err) => console.log('facebook newschool error', err));
    } catch (err) {
      console.error('facebook oldschool error', err);
    }
  };

  return (
    <>
      {
        loading ? 
          <div className="loading">loading...</div>
        :
          <div className="menu">
            {
              user ?
              <>
                <img alt={user.displayName} src={user.photoURL} onClick={() => openMenu(s => !s)} />
                {menu && <ul id="menu">
                  <li onClick={(() => alert('click!'))}>{user.displayName}</li>
                  <li onClick={(() => signOut(auth))}>Sign out</li>
                </ul>}
              </>
              :
              <button className="signInBtn" onClick={() => signInWithGoogle()}> Sign In With Google</button>
            }
          </div>
      }
    </>
  );
}

export default Auth;
