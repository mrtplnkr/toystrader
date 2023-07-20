
function LoginPage() {
    return (
      <>
        <h1>Login page</h1>

        <button>Login with google</button>
        <button>Login with facebook</button>
        <form submit={alert('welcome not')}>
          <button>Login with email</button>
        </form>
      </>
    );
}
  
export default LoginPage;