import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const AdminRoute = ({
  isAuthenticated,
  component: Component,
  uid,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated && uid === process.env.REACT_APP_ADMIN_CRUD ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

AdminRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
