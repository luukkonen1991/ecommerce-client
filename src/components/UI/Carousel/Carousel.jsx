import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

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
        {/*--------------------------*/}
        <Slide index={0}>
          <h3>Title</h3>
          <ImageWithZoom src="https://source.unsplash.com/random/800x600" alt="random" />
        </Slide>
        {/*--------------------------*/}
        <Slide index={1}>
          <h3>Title</h3>
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
        <ButtonBack className="BtnBack"><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon></ButtonBack>
        <ButtonNext className="BtnNext"><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
