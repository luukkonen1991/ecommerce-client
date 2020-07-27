import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignOut from "../Toolbar/UserProfileIcon/UserProfileDropdown/SignOut/SignOut";
import CartIcon from "../Toolbar/CartIcon/CartIcon";
import CartDropdown from "../Toolbar/CartIcon/CartDropdown/CartDropdown";
import UserProfileIcon from "../Toolbar/UserProfileIcon/UserProfileIcon";
import UserProfileDropdown from "../Toolbar/UserProfileIcon/UserProfileDropdown/UserProfileDropdown";

import classes from "./NavigationItems.module.scss";

const NavigationItems = ({ cartHidden, userHidden, authenticated }) => {
  return (
    <ul className={classes.NavigationItems}>
      <li>Item1</li>
      <li>
        <Link className="header-link" to="/contact">
          Contact
        </Link>
      </li>
      {!authenticated ? (
        <Link to="/signin">
          <li>Sign in</li>
        </Link>
      ) : (
        <Fragment>
          <UserProfileIcon />
          <CartIcon />
        </Fragment>
      )}
      {userHidden ? null : <UserProfileDropdown />}
      {cartHidden ? null : <CartDropdown />}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.user,
    cartHidden: state.cart.hidden,
    userHidden: state.user.hidden,
  };
};

export default connect(mapStateToProps)(NavigationItems);
