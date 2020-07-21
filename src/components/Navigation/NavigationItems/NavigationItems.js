import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../redux/auth/auth.actions";

import CartIcon from "../Toolbar/CartIcon/CartIcon";
import SignOut from "../Toolbar/SignOut/SignOut";

import classes from "./NavigationItems.module.scss";

const NavigationItems = (props) => {
  const logOut = () => {
    props.signOut();
  };
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
        <SignOut onClick={logOut} />
      )}

      <CartIcon />
    </ul>
  );
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(NavigationItems);
