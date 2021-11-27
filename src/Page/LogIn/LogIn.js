import { Alert, CircularProgress, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import Footer from "../../Components/Shared/Nav/Footer/Footer";
import Nav from "../../Components/Shared/Nav/Nav";
import useAuth from "../../Hooks/useAuth";

const LogIn = () => {
  const [logInData, setLogInData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { handleLogin, isLoading, authError } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...logInData };
    newUserData[field] = value;
    setLogInData(newUserData);
  };
  console.log("logIn", logInData);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(logInData.email, logInData.password, location, history);
  };

  return (
    <>
      <Nav />
      <div className="registrationPage">
        <div className="registration">
          {!isLoading && (
            <form action="submit" onSubmit={handleSubmit}>
              <input
                onBlur={handleBlur}
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <input
                onBlur={handleBlur}
                type="password"
                name="password"
                placeholder="Enter password"
              />

              <input type="submit" value="Log In" />
              <Button
                type="submit"
                style={{ textAlign: "center", fontSize: "1.5rem" }}
              >
                <NavLink to="/register">New User ! Register here..."</NavLink>
              </Button>
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
          )}
          {isLoading && <CircularProgress />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
