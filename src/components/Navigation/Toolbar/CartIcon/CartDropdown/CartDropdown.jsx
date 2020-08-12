import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FormButton from "../../../../UI/Form/FormButton/FormButton";
import CartItem from "../../../../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <FormButton onClick={() => history.push("/cart")}>
        GO TO CHECKOUT
      </FormButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
