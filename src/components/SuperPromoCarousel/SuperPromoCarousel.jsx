import React from 'react';

import Carousel from '../UI/Carousel/Carousel';

const SuperPromoCarousel = props => {
  return (
    <div>
      <h1>SUPERPROMOS!</h1>
      <Carousel superPromoItems={props.superPromoItems} />
    </div>
  );
};

export default SuperPromoCarousel;
