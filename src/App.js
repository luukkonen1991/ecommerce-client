import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";

import ContactForm from "./containers/ContactForm/ContactForm";
import ShopPage from "./containers/Shop/ShopPage";
import SignIn from './containers/Auth/SignIn/SignIn';
import Register from './containers/Auth/Register/Register';


let routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/contact" component={ContactForm} />
    <Route path="/shop" component={ShopPage} />
    <Redirect to="/" />
  </Switch>
);

const App = (props) => {
  return <Layout>{routes}</Layout>;
};

export default App;
