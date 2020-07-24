import React from 'react';

import "./Product.scss";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-main-img-container">
        <div className="main-img-item">
          <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
          <p>Price 5,99€</p>
        </div>
      </div>
      <div className="product-secondary-imgs-container">
        <h2>ProductTitle</h2>
        <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
      </div>
    </div>
  );
};

export default Product;
