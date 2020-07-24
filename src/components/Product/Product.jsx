import React from 'react';

import "./Product.scss";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-main-img-container">
        <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
      </div>
      <div className="product-secondary-imgs-container">
        <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
      </div>
    </div>
  );
};

export default Product;
