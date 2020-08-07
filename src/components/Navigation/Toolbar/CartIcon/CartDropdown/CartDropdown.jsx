import React from "react";
import { connect } from "react-redux";

import FormButton from "../../../../UI/Form/FormButton/FormButton";
import CartItem from "../../../../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
