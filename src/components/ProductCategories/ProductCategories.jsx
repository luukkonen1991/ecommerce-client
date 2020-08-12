import React, { useEffect, useState } from 'react';

// import { } from '../../services/TargetGroupService';
import Carousel from '../UI/Carousel/Carousel';
import { fetchAllProducts } from '../../services/ProductService';
import "./ProductCategories.scss";

const ProductCategories = props => {
  // const [targetId, setTargetId] = useState();
  const [targetGroupProducts, setTargetGroupProducts] = useState();
  const [targetCategories, setTargetCategories] = useState([]);
  // let categoryContainerContent;
  let categoryProductContent;

  useEffect(() => {
    console.log('[ProductCategoriesComponent useEffect]');
    fetchAllProducts({ params: { targetGroupId: props.location.state.targetId, include: "category" } })
      .then(resp => {
        setTargetGroupProducts(resp.data.data);
        for (let data of resp.data.data) {
          if (targetCategories.indexOf(data.category.title) === -1) {
            setTargetCategories([...targetCategories, data.category.title]);
          }
        }
      });
  }, [props, targetCategories]);

  categoryProductContent = targetCategories.map((category) => {
    let products = targetGroupProducts.filter(product => { return product.category.title === category; });
    return (
      <div className="category-container">
        <div className="category-img">
          <h1>{category}</h1>
        </div>
        <Carousel products={products} />
      </div>
    );
  });

  return (
    <div className="main-container">
      <p>i am the main-container</p>
      <div className="category-container" >
        {categoryProductContent}
      </div>
    </div>
  );
};

export default ProductCategories;


// <div className="category-img" >
// {categoryContainerContent}
// </div>
// <div className="category-content" >
// {categoryProductContent}
// </div>