import React, { useState, useEffect } from 'react';
import { fetchProductById } from '../../services/ProductService';

import "./Product.scss";

const Product = props => {
  let secondaryImgDivs;
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState(null);
  const [secondaryImgs, setSecondaryImgs] = useState([]);

  useEffect(() => {
    console.log('ComponentDidMount');
    let itemId = props.match.params.id;
    fetchProductById(itemId).then(resp => {
      setProduct(resp.data.data);
      setActiveImg(resp.data.data.main_img);
      setSecondaryImgs(resp.data.data.product_imgs);
    });
  }, [props.match.params.id]);

  const activeImgChangeHandler = () => {

  };

  if (secondaryImgs) {
    secondaryImgDivs = secondaryImgs.map((item) => {
      return (
        <div
          className="product-secondary-img-container"
          onClick={activeImgChangeHandler}
          key={item}
          id={item}>
          <img src={`/uploads/${item}`} alt="disIsAltDesc" onClick={() => setActiveImg(item)} />
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
          <div
            className="product-secondary-img-container"
            onClick={activeImgChangeHandler}
            id={product.main_img}>
            <img src={`/uploads/${product.main_img}`} alt="disIsAltDesc" onClick={() => setActiveImg(product.main_img)} />
          </div>
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