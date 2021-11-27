import { Alert, Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../../Components/Shared/Nav/Footer/Footer";
import Nav from "../../Components/Shared/Nav/Nav";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";
const Register = () => {
  const [userData, setUserData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { handleRegistration, isLoading, authError } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
  };
  console.log("register", userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password1 !== userData.password2) {
      alert("Your password did not match");
      return;
    }

    handleRegistration(
      userData.email,
      userData.password1,
      userData.name,
      location,
      history
    );
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
                type="text"
                name="name"
                placeholder="Enter name"
              />
              <input
                onBlur={handleBlur}
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <input
                onBlur={handleBlur}
                type="password"
                name="password1"
                placeholder="Enter password"
              />
              <input
                onBlur={handleBlur}
                type="password"
                name="password2"
                placeholder="Retype password"
              />
              <input type="submit" value="register" />
              {authError && <Alert severity="error">{authError}</Alert>}

              <Button
                type="submit"
                style={{ textAlign: "center", fontSize: "1.5rem" }}
              >
                <NavLink to="/logIn">Old User ! Login here..."</NavLink>
              </Button>
            </form>
          )}
          {isLoading && <CircularProgress />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
