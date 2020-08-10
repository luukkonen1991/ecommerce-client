import React from "react";

import "./CartItem.scss";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <div
          className="cart-item-image"
          style={{
            backgroundImage: `url(http://localhost:5000/uploads/${item.main_img})`,
          }}
        ></div>
      </div>
      <div className="cart-item-details">
        <span className="title">{item.title}</span>
        <span className="price">
          {item.quantity} X {item.price}€
        </span>
        <span className="total">
          Total price: {item.quantity * item.price}€
        </span>
      </div>
    </div>
  );
};

export default CartItem;
