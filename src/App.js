import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
// import SignInAndSignUp from "./containers/SignInAndSignUp/SignInAndSignUp";
import ContactForm from "./containers/ContactForm/ContactForm";
import ShopPage from "./containers/Shop/ShopPage";
// import SignInForm from "./components/Sign-in-form/Sign-in-form";
// import RegisterForm from "./components/Register-form/RegisterForm";
import SignIn from './containers/Auth/SignIn/SignIn';
import Register from './containers/Auth/Register/Register';
import Product from './components/Product/ProductOld';


let routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/contact" component={ContactForm} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/product/:id" component={Product} />
    <Redirect to="/" />
  </Switch>
);

const App = (props) => {
  return <Layout>{routes}</Layout>;
};

export default App;
