import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../../../store/actions/cart";

import CartDropdown from "./CartDropdown/CartDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartIcon.scss";

const CartIcon = ({ cartItemsCount }) => {
  const [isShown, setIsShown] = useState(false);
  const history = useHistory();

  return (
    <div
      className="cart-icon"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <FontAwesomeIcon
        className="cart-pic"
        icon={faShoppingCart}
        onClick={() => history.push("/cart")}
      ></FontAwesomeIcon>

      <span className="item-count">{cartItemsCount}</span>
      {isShown ? <CartDropdown /> : null}
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
// });

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItemsCount: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(CartIcon);
