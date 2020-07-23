import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignOut from "../Toolbar/SignOut/SignOut";
import CartIcon from "../Toolbar/CartIcon/CartIcon";
import CartDropdown from "../Toolbar/CartIcon/CartDropdown/CartDropdown";
import UserProfileIcon from "../Toolbar/UserProfileIcon/UserProfileIcon";
import UserProfileDropdown from "../Toolbar/UserProfileIcon/UserProfileDropdown/UserProfileDropdown";

import classes from "./NavigationItems.module.scss";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <li>Item1</li>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      {!props.authenticated ? (
        <Link to="/signin">
          <li>Sign in</li>
        </Link>
      ) : (
        <Fragment>
          <UserProfileIcon />
          <SignOut />
          <CartIcon />
        </Fragment>
      )}
      {props.userHidden ? null : <UserProfileDropdown />}
      {props.cartHidden ? null : <CartDropdown />}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token,
    cartHidden: state.cart.hidden,
    userHidden: state.user.hidden,
  };
};

export default connect(mapStateToProps)(NavigationItems);
