import React from "react";
import { useAuth } from "../authProvider";

function LoginPage() {
  const { signGoogle } = useAuth();

    return (
      <>
        <h1>Login page</h1>

        <button onClick={() => signGoogle(() => alert('I logged in!'))}>Login with google</button>
        <button>Login with facebook</button>
        <form onSubmit={() => alert('welcome not')}>
          <button>Login with email</button>
        </form>
      </>
    );
}
  
export default LoginPage;