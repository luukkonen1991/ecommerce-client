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
      <li className="nav-item">
        <span>Item1</span>
      </li>
      <li className="nav-item">
        <Link className="nav-item__link" to="/contact">
          <span>Contact</span>
        </Link>
      </li>
      {!authenticated ? (
        <li>
          <Link className="nav-item__link" to="/signin">
            <span>Sign in</span>
          </Link>
        </li>
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
