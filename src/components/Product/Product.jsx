import React, { useState, useEffect, useRef } from 'react';
import { fetchProductById } from '../../services/ProductService';

import "./Product.scss";

const Product = props => {
  let secondaryImgDivs;
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState(null);
  const [secondaryImgs, setSecondaryImgs] = useState([]);
  const secondaryImgEl = useRef(null);

  useEffect(() => {
    let itemId = props.match.params.id;
    fetchProductById(itemId).then(resp => {
      setProduct(resp.data.data);
      setActiveImg(resp.data.data.main_img);
      setSecondaryImgs(resp.data.data.product_imgs);
    });
  }, [props.match.params.id, setSecondaryImgs, activeImg]);

  const activeImgChangeHandler = () => {

  };

  if (secondaryImgs) {
    secondaryImgDivs = secondaryImgs.map((item) => {
      return (
        <div
          className="product-secondary-img-container"
          ref={secondaryImgEl}
          onClick={activeImgChangeHandler}
          key={item}
          id={item}>
          <img src={`/uploads/${item}`} alt="disIsAltDesc" />
        </div>
      );
    });
  };

  return (
    <div className="product-container">
      <div className="product-main-img-container">
        <div className="main-img-item">
          <img src={`/uploads/${activeImg}`} alt="disIsAltDesc" />
          <p>{product.price}€</p>
        </div>
      </div>
      <div className="product-sidebar-container">
        <h2>ProductTitle</h2>
        <div className="product-secondary-imgs-container">
          {secondaryImgDivs}
        </div>
      </div>
    </div>
  );
};

export default Product;



// <div className="product-secondary-img-container">
// <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
// </div>
// <div className="product-secondary-img-container">
// <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
// </div>
// <div className="product-secondary-img-container">
// <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
// </div>