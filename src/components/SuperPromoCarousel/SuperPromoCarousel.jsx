import React from 'react';

import Carousel from '../UI/Carousel/Carousel';

import "./SuperPromoCarousel.scss";

const SuperPromoCarousel = props => {
  return (
    <div className="super-promo-carousel-container" >
      <h1>SUPERPROMOS!</h1>
      <Carousel superPromoItems={props.superPromoItems} />
    </div>
  );
};

export default SuperPromoCarousel;
