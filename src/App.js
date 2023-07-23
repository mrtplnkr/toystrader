import React from "react";
import PublicPage from "./components/public";
import LoginPage from "./components/login";
import ListPage from "./components/list";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import './App.css';
import Auth from './components/auth';
import { AuthProvider } from "./authProvider";
import { useAuth } from "./authProvider";

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

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
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
