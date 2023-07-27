//https://toystrader-a494f.firebaseapp.com/__/auth/handler
import React, { useState } from "react";
import { useAuth } from "../authProvider";

function Auth() {

  const { user, logOf } = useAuth();

  const [loading] = useState(false);

  const [menu, openMenu] = useState(false);

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
                {menu && <ul>
                  <li>{user.id}</li>
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
