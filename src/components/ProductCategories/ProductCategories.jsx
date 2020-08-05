import React, { useEffect, useState } from 'react';

// import { } from '../../services/TargetGroupService';
import { fetchAllProducts } from '../../services/ProductService';
import "./ProductCategories.scss";

const ProductCategories = props => {
  const [targetId, setTargetId] = useState();
  const [targetGroupProducts, setTargetGroupProducts] = useState();

  useEffect(() => {
    console.log('[ProductCategoriesComponent Rendered]');
    console.log(props.match);
    console.log(props.location.state.targetId);
    fetchAllProducts({ params: { targetGroupId: props.location.state.targetId, include: "category" } })
      .then(resp => {
        console.log(resp.data.data);
      });
  }, [props]);

  return (
    <div className="main-container">
      <p>hello</p>
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
