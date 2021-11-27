import React from "react";
import useAuth from "./../../Hooks/useAuth";
import { NavLink } from "react-router-dom";
import "./LoggedInNav.css";

const LoggedInOptions = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="loggedInNav">
        <NavLink
          to="/dashboard"
          className=""
          style={{ fontSize: "2rem", marginRight: "2rem", color: "white" }}
        >
          Dashboard
        </NavLink>
        {user.email && (
          <NavLink
            to="/#"
            style={{ fontSize: "2rem", marginRight: "2rem", color: "white" }}
          >
            {user.displayName}
          </NavLink>
        )}
        <NavLink
          to="/logIn"
          className=""
          onClick={logout}
          style={{ fontSize: "2rem", marginRight: "2rem", color: "white" }}
        >
          Log out
        </NavLink>
      </nav>
    </div>
  );
};

export default LoggedInOptions;
