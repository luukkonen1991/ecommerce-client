import React, { useEffect, useState } from 'react';

// import { } from '../../services/TargetGroupService';
import { fetchAllProducts } from '../../services/ProductService';
import "./ProductCategories.scss";

const ProductCategories = props => {
  // const [targetId, setTargetId] = useState();
  const [targetGroupProducts, setTargetGroupProducts] = useState();
  const [targetCategories, setTargetCategories] = useState([]);
  let categoryContainerContent;
  let categoryProductContent;

  useEffect(() => {
    console.log('PRODUCTCATEGORIES RENDERED');
    console.log('[ProductCategoriesComponent Rendered]');
    console.log(props.match);
    console.log(props.location.state.targetId);
    fetchAllProducts({ params: { targetGroupId: props.location.state.targetId, include: "category" } })
      .then(resp => {
        setTargetGroupProducts(resp.data.data);
        // setTargetCategories()
        console.log(resp.data.data);
        for (let data of resp.data.data) {
          if (targetCategories.indexOf(data.category.title) === -1) {
            setTargetCategories([...targetCategories, data.category.title]);
          }
        }
        // console.log(Object.values(resp.data.data[0]), '[VALUES]');
      });
  }, [props, targetCategories]);


  console.log(targetCategories, '[TARGETCATEGORIES]');

  categoryContainerContent =

    categoryProductContent = targetCategories.map((category) => {
      let products = targetGroupProducts.filter(product => { return product.category.title === category; });
      console.log(products, '[PRODUCTS .,.fadsf]');
      return (
        <div className="category-container" >

        </div>
      );
    });

  return (
    <div className="main-container">
      <p>i am the main-container</p>
      <div className="category-container" >
        <div className="category-img" >
          <p>hello</p>
        </div>
        <div className="category-content" >
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
