import React, { useEffect } from "react";
import { fakeAuthProvider } from "./authProviderFunctions";
// import { useNavigate } from "react-router-dom";

let AuthContext = React.createContext(undefined);

function AuthProvider({ children }) {
    let [user, setUser] = React.useState(null);
    // let navigate = useNavigate();

    useEffect(() => {
      fakeAuthProvider.checkStatus().onAuthStateChanged(async (res) => {
        if (res) {
            setUser({ displayName: res.displayName, photoURL: res.photoURL });
            // navigate('/list');
        };
      });
    }, []);

    let signGoogle = async (callback) => {
      await fakeAuthProvider.googleSign((user) => {
        setUser(user);
      });
      callback();
      return;
    };
  
    let logOf = () => {
      return fakeAuthProvider.logOff().then(() => {
        setUser(null);
      });
    };
  
    let value = { user, signGoogle, logOf };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  return React.useContext(AuthContext);
};

export { useAuth, AuthContext, AuthProvider };
