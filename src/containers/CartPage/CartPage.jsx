import React from "react";
import { connect } from "react-redux";

import CartPageItem from "../../components/CartPageItem/CartPageItem";

import "./CartPage.scss";

const CartPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="cart-page">
      <div className="cart-page-header">
        <div className="title">
          <h2 className="cart-title">YOUR CART</h2>
        </div>
      </div>

      <div className="cart-page-items">
        {cartItems.map((cartItem) => (
          <CartPageItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
  totalPrice: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps)(CartPage);
