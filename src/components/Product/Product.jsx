import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchProductById } from "../../services/ProductService";
import * as actions from "../../store/actions/index";

import Button from "../UI/Button/Button";

import "./Product.scss";

const Product = (props) => {
  let secondaryImgDivs = null;
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState(null);
  const [secondaryImgs, setSecondaryImgs] = useState();
  // console.log(activeImg);

  useEffect(() => {
    let itemId = props.match.params.id;
    fetchProductById(itemId).then((resp) => {
      setProduct(resp.data.data);
      setActiveImg(resp.data.data.main_img);
      if (resp.data.data.product_imgs) {
        setSecondaryImgs([
          resp.data.data.main_img,
          ...resp.data.data.product_imgs,
        ]);
      }
    });
  }, [props.match.params.id]);

  console.log(secondaryImgs);

  if (secondaryImgs) {
    secondaryImgDivs = secondaryImgs.map((item) => {
      return (
        <div
          className={
            "product-secondary-img-container " +
            (item === activeImg ? "selected-img" : "")
          }
          style={{
            backgroundImage: `url(http://localhost:5000/uploads/${item})`,
          }}
          key={item}
          id={item}
          onClick={() => productImgHandler(item)}
        ></div>
      );
    });
  }

  const productImgHandler = (img) => {
    setActiveImg(img);
  };

  return (
    <div className="product-container">
      <div className="product-main-img-container">
        <div
          className="main-img-item"
          style={{
            backgroundImage: `url(http://localhost:5000/uploads/${activeImg})`,
          }}
        >
          <p>{product.price}€</p>
        </div>
      </div>
      <div className="product-sidebar-container">
        <h2>{product.title}</h2>
        <p>{product.price}€</p>
        <div className="product-secondary-imgs-container">
          {secondaryImgDivs}
        </div>
        <div className="add-to-cart-btn">
          <Button onClick={() => props.addProduct(product)}>
            Add to your cart
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(actions.addItemToCart(product)),
});

export default connect(null, mapDispatchToProps)(Product);