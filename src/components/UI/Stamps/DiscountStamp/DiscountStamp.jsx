import React from 'react';
import discountImg from '../../../../shared/images/discount/discount-stamp.png';

import "./DiscountStamp.scss";

const DiscountStamp = props => {
  return (
    <div className="discount-img" style={{ backgroundImage: `url(${discountImg})` }}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default DiscountStamp;
