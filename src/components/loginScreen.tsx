import { useAuth0 } from "@auth0/auth0-react";

const LoginScreen = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div>
        <h1>Click on the Button to Login:</h1>
        <button onClick={() => loginWithRedirect()}>Log IN</button>
      </div>
    </>
  );
};

export default LoginScreen;
