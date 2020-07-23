import React from "react";
import { connect } from "react-redux";

import classes from "./Toolbar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import Banner from "./Banner/Banner";
// import CartDropdown from "./CartIcon/CartDropdown/CartDropdown";
// import UserProfileDropDown from "./UserProfileIcon/UserProfileDropdown/UserProfileDropDown";

function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Banner />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

// const mapStateToProps = (state) => {
//   return { cartHidden: state.cart.hidden };
// };

export default connect()(Toolbar);
