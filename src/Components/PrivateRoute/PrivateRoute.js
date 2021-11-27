import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
  if (user?.email) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/logIn",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
};

export default PrivateRoute;
