import { useAuth0 } from "@auth0/auth0-react";

const LoggedInScreen = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <h1>Logging In , Please Wait </h1>;
  }
  return (
    <div>
      <h1>Log In Successful , user : {user?.name}</h1>
      <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
    </div>
  );
};

export default LoggedInScreen;
