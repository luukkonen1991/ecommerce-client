import React, { useEffect, useState } from 'react';

import { } from '../../services/TargetGroupService';
import "./ProductCategories.scss";

const ProductCategories = props => {
  const [targetId, setTargetId] = useState();

  useEffect(() => {
    console.log('[ProductCategoriesComponent Rendered]');
    console.log(props.match);
    console.log(props.location.state.targetId);
  }, [props]);

  return (
    <div className="main-container">
      <h1>Hello im ProductCategoriesComp</h1>
    </div>
  );
};

export default ProductCategories;
