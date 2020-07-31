import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartIcon.scss";

const CartIcon = (props) => (
  <div className="cart-icon" onClick={props.toggleCartHidden}>
    <FontAwesomeIcon
      className="cart-pic"
      icon={faShoppingCart}
    ></FontAwesomeIcon>

    <span className="item-count">1</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
