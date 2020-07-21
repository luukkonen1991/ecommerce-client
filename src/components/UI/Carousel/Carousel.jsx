import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import './Carousel.scss';

const Carousel = props => {
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    if (window.screen.width <= 600) {
      setVisibleSlides(1);
    }
  }, []);



  return (
    <CarouselProvider
      visibleSlides={visibleSlides}
      naturalSlideWidth={600}
      naturalSlideHeight={400}
      totalSlides={6}
      orientation={'horizontal'}
    >
      <Slider className="Slider" >
        {/*--------------------------*/}
        <Slide index={0}>
          <ImageWithZoom src="https://source.unsplash.com/random/800x600" alt="random" />
        </Slide>
        {/*--------------------------*/}
        <Slide index={1}>
          <ImageWithZoom src="https://source.unsplash.com/random/800x600" alt="random" />
        </Slide>
        {/*--------------------------*/}
        <Slide index={2}>
          <ImageWithZoom src="https://source.unsplash.com/random/800x600" alt="random" />
        </Slide>
        {/*--------------------------*/}
        <Slide index={3}>
          <ImageWithZoom src="https://source.unsplash.com/random/800x600" alt="random" />
        </Slide>
        {/*--------------------------*/}
        <Slide index={4}>
          <ImageWithZoom src="https://source.unsplash.com/random/800x600" alt="random" />
        </Slide>
        {/*--------------------------*/}
        <Slide index={5}>
          <ImageWithZoom src="https://source.unsplash.com/random/800x600" alt="random" />
        </Slide>
      </Slider>
      <div className="Btn-Container">
        <ButtonFirst className="BtnBack"><FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon></ButtonFirst>
        <ButtonBack className="BtnBack"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></ButtonBack>
        <ButtonNext className="BtnNext"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></ButtonNext>
        <ButtonLast className="BtnNext"><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></ButtonLast>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
