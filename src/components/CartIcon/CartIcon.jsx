import React from "react";

import "./CartIcon.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <div className="cart-pic">
      <i className="fas fa-shopping-cart fa-2x"></i>
    </div>
    <span className="item-count">1</span>
  </div>
);

export default CartIcon;
