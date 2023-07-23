import React from "react";
import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { signGoogle } = useAuth();
  const navigate = useNavigate();

    return (
      <>
        <h1>Login page</h1>

        <button onClick={() => signGoogle(() => navigate("/list"))}>Login with google</button>
        <button>Login with facebook</button>
        <form onSubmit={() => alert('welcome not')}>
          <button>Login with email</button>
        </form>
      </>
    );
}
  
export default LoginPage;