import React from "react";

import FormButton from "../../../../UI/Form/FormButton/FormButton";

import "./CartDropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <FormButton>GO TO CHECKOUT</FormButton>
  </div>
);

export default CartDropdown;
