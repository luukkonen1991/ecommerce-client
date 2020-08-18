import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";

import ContactForm from "./containers/ContactForm/ContactForm";
import ShopPage from "./containers/Shop/ShopPage";

import Account from "./containers/Account/Account";
import UserProfile from "./containers/Account/AccountContent/UserProfile/UserProfile";
import SignIn from "./containers/Auth/SignIn/SignIn";
import Register from "./containers/Auth/Register/Register";
import Product from "./components/Product/Product";
import ProductGategories from "./components/ProductCategories/ProductCategories";
import CartPage from "./containers/CartPage/CartPage";

let routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/contact" component={ContactForm} />
    <Route path="/shop/:targetGroup" component={ProductGategories} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/products/:id" component={Product} />
    <Route path="/account" component={Account} />
    <Route path="/account/details" component={UserProfile} />
    <Route path="/cart" component={CartPage} />

    <Redirect to="/" />
  </Switch>
);

const App = (props) => {
  return <Layout>{routes}</Layout>;
};

export default App;
