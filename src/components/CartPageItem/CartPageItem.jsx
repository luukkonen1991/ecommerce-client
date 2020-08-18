import React from "react";

import "./CartPageItem.scss";

const CartPageItem = ({ cartItem }) => {
  // console.log(props);
  return (
    <div className="cart-page-item">
      <div className="cart-page-item-image-container">
        <div
          className="cart-page-item-image"
          style={{
            backgroundImage: `url(http://localhost:5000/uploads/${cartItem.main_img})`,
          }}
        ></div>
      </div>
      <div className="cart-page-item-info-container">
        <span className="title">{cartItem.title}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">{cartItem.price}</span>
      </div>
    </div>
  );
};

export default CartPageItem;
