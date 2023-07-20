//https://toystrader-a494f.firebaseapp.com/__/auth/handler
import React, { useState } from "react";
import { useAuth } from "../authProvider";

function Auth() {

  const { user, signGoogle, logOf } = useAuth();

  const [loading, setLoading] = useState(false);

  const [menu, openMenu] = useState(false);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await signGoogle();
      setLoading(false);
    } catch (err) {
      console.error('google error', err);
    }
  };

  // const signInWithFacebook = async () => {
  //   try {
  //     await signInWithPopup(auth, facebookProvider)
  //       .then((res) => console.log('facebook authprovider', res))
  //       .catch((err) => console.log('facebook newschool error', err));
  //   } catch (err) {
  //     console.error('facebook oldschool error', err);
  //   }
  // };

  const logOfCallback = () => {
    alert('I logged out!')
  };

  return (
    <>
      {
        loading ? 
          <div className="loading">loading...</div>
        :
          <div className="menu">
            {
              user && user.displayName &&
              <>
                <img alt={user.displayName} src={user.photoURL} onClick={() => openMenu(s => !s)} />
                {menu && <ul id="menu">
                  <li onClick={(() => alert('click!'))}>{user.displayName}</li>
                  <li onClick={(() => logOf(logOfCallback))}>Sign out</li>
                </ul>}
              </>
            }
          </div>
      }
    </>
  );
}

export default Auth;
