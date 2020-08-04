import React, { useEffect } from 'react';

const ProductCategories = props => {

  useEffect(() => {
    console.log('[ProductCategoriesComponent Rendered]');
    console.log(props.match);
    console.log(props.location.state.targetId);
  }, [props]);

  return (
    <div>
      <h1>Hello im ProductCategoriesComp</h1>
    </div>
  );
};

export default ProductCategories;
