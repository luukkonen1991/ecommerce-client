import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import SignInAndSignUp from "./containers/SignInAndSignUp/SignInAndSignUp";
import ContactForm from "./containers/ContactForm/ContactForm";
import ShopPage from "./containers/Shop/ShopPage";
import SignInForm from "./components/Sign-in-form/Sign-in-form";
import RegisterForm from "./components/Register-form/RegisterForm";

let routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignInForm} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/contact" component={ContactForm} />
    <Route path="/shop" component={ShopPage} />
    <Redirect to="/" />
  </Switch>
);

const App = (props) => {
  return <Layout>{routes}</Layout>;
};

export default App;
