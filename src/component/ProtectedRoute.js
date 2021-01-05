import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {UserPreferences} from "./UserPreferences";

const ProtectedRoute = ({ component: Component, noauth, role, ...rest }) => {
  const { user } = useContext(UserPreferences);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        (noauth && !user) ||
        (!noauth && user && (!role || user.role === role)) ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
