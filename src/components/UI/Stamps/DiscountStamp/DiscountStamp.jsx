import React from 'react';
import discountImg from '../../../../shared/images/discount/discount-stamp2.png';

import "./DiscountStamp.scss";

const DiscountStamp = props => {
  return (
    <div id="discount-img" style={{ backgroundImage: `url(${discountImg})` }}>
      <p id="discount-percentage">{props.children}</p>
    </div>
  );
};

export default DiscountStamp;
