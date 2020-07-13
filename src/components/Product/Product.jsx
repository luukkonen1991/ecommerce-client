import React from "react";

import "./Product.scss";

const Product = ({ id, title, description, price }) => (
  <div className="single-product">
    <div className="image">dfafaf</div>
    <div className="product-footer">
      <span className="title">{title}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);
export default Product;
