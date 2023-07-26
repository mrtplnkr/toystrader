import React from "react";
import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { signGoogle, signFacebook } = useAuth();
  const navigate = useNavigate();

    return (
      <>
        <h1>Login page</h1>

        <button onClick={() => signGoogle(() => navigate("/list"))}>Google login</button>
        <button onClick={() => signFacebook(() => navigate("/list"))}>Facebook login</button>
        {/* <form onSubmit={() => alert('welcome not')}>
          <button>Login with email</button>
        </form> */}
      </>
    );
}
  
export default LoginPage;