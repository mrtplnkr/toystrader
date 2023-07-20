import React from "react";
import PublicPage from "./components/public";
import LoginPage from "./components/login";
import ListPage from "./components/list";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import './App.css';
import Auth from './components/auth';
import { fakeAuthProvider } from "./authProvider";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<PublicPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/list"
                  element={
                    <RequireAuth>
                      <ListPage />
                    </RequireAuth>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </header>
    </div>
  );
}

let AuthContext = React.createContext(undefined);

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function Layout() {
  return (
    <div>
      <Auth />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/list">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default App;
