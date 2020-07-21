import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './Carousel.scss';

const Carousel = props => {
  return (
    <CarouselProvider
      visibleSlides={3}
      naturalSlideWidth={600}
      naturalSlideHeight={400}
      totalSlides={6}
      orientation={'horizontal'}
    >
      <Slider className="Slider" >
        <Slide index={0}><p>I am the first Slide.</p></Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
        <Slide index={3}><p>I am the 4 Slide.</p></Slide>
        <Slide index={4}>I am the 5 Slide.</Slide>
        <Slide index={5}>I am the 6 Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
