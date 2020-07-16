import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../../CartIcon/CartIcon";
import CartDropdown from "../../CartDropdown/CartDropdown";

import classes from "./NavigationItems.module.scss";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <li>Item1</li>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/signin">
        <li>Sign in</li>
      </Link>
      <CartIcon />
    </ul>
  );
};

export default NavigationItems;
