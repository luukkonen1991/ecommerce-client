import React, { useState, useEffect } from 'react';
import { fetchProductById } from '../../services/ProductService';

import "./Product.scss";

const Product = props => {
  let secondaryImgDivs;
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState(null);
  const [secondaryImgs, setSecondaryImgs] = useState();

  useEffect(() => {
    console.log('ComponentDidMount');
    let itemId = props.match.params.id;
    fetchProductById(itemId).then(resp => {
      setProduct(resp.data.data);
      setActiveImg(resp.data.data.main_img);
      setSecondaryImgs([resp.data.data.main_img, ...resp.data.data.product_imgs]);
    });
  }, [props.match.params.id]);

  console.log(secondaryImgs);

  if (secondaryImgs) {
    secondaryImgDivs = secondaryImgs.map((item) => {
      return (
        <div
          className={"product-secondary-img-container " + (item === activeImg ? "selected-img" : '')}
          style={{ backgroundImage: `url(http://localhost:5000/uploads/${item})` }}
          key={item}
          id={item}
          onClick={() => productImgHandler(item)}
        >
        </div>
      );
    });
  };

  const productImgHandler = (img) => {
    setActiveImg(img);
  };

  return (
    <div className="product-container">
      <div className="product-main-img-container">
        <div className="main-img-item" style={{ backgroundImage: `url(http://localhost:5000/uploads/${activeImg})` }}>
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


// <div
// className="product-secondary-img-container"
// style={{
//   backgroundImage: `url(http://localhost:5000/uploads/${product.main_img})`
// }}
// id={product.main_img}
// onClick={() => productImgHandler(product.main_img)}
// >
// </div>





// <div className="product-secondary-img-container">
// <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
// </div>
// <div className="product-secondary-img-container">
// <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
// </div>
// <div className="product-secondary-img-container">
// <img src="https://source.unsplash.com/random/800x600" alt="disIsAltDesc" />
// </div>