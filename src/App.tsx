import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./components/loginScreen";
import { useAuth0 } from "@auth0/auth0-react";
import LoggedInScreen from "./components/loggedInScreen";
function App() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <div className="App">
      {isAuthenticated ? <LoggedInScreen /> : <LoginScreen />}
    </div>
  );
}

export default App;
