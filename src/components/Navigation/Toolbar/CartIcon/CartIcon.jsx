import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartIcon.scss";

const CartIcon = ({ cartItemsCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <FontAwesomeIcon
      className="cart-pic"
      icon={faShoppingCart}
    ></FontAwesomeIcon>

    <span className="item-count">{cartItemsCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItemsCount: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
