import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import SignInAndSignUp from "./containers/SignInAndSignUp/SignInAndSignUp";

let routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignInAndSignUp} />
    <Redirect to="/" />
  </Switch>
);

const App = (props) => {
  return <Layout>{routes}</Layout>;
};

export default App;
