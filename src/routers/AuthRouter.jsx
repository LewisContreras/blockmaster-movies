import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthForm } from "../components/auth/AuthForm";

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={AuthForm} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};
