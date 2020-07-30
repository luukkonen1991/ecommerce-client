import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import './Carousel.scss';

const Carousel = props => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [superPromoItems, setSuperPromoItems] = useState([]);
  let slides;

  useEffect(() => {
    if (window.screen.width <= 600) {
      setVisibleSlides(1);
    }
  }, []);
  useEffect(() => {
    setSuperPromoItems(props.superPromoItems);
  }, [props.superPromoItems]);


  if (props.superPromoItems) {
    slides = superPromoItems.map((item, index) => {
      return (
        <Link
          key={item.id}
          className="slider-item-link"
          to={`product/${item.id}`}
        >
          <Slide index={index} className="Slide">
            <h3>{item.title}</h3>
            <div style={{ backgroundImage: `url(http://localhost:5000/uploads/${item.main_img})` }}>
            </div>
            <div className="promo-tag-div">
            </div>
            <p>{item.price}€</p>
          </Slide>
        </Link>);
    });
  }

  return (
    <CarouselProvider
      visibleSlides={visibleSlides}
      naturalSlideWidth={250}
      naturalSlideHeight={300}
      totalSlides={6}
      orientation={'horizontal'}
    >
      <Slider className="Slider" >
        {slides}
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

// <Image src={`/uploads/${item.main_img}`} alt="someAlt">
// </Image>


    //    {/*--------------------------*/}
    //    <Slide index={0}>
    //    <Image src="https://source.unsplash.com/random/800x600" alt="random" />
    //  </Slide>
    //  {/*--------------------------*/}
    //  <Slide index={1}>
    //    <Image src="https://source.unsplash.com/random/800x600" alt="random" />
    //  </Slide>
    //  {/*--------------------------*/}
    //  <Slide index={2}>
    //    <Image src="https://source.unsplash.com/random/800x600" alt="random" />
    //  </Slide>
    //  {/*--------------------------*/}
    //  <Slide index={3}>
    //    <Image src="https://source.unsplash.com/random/800x600" alt="random" />
    //  </Slide>
    //  {/*--------------------------*/}
    //  <Slide index={4}>
    //    <Image src="https://source.unsplash.com/random/800x600" alt="random" />
    //  </Slide>
    //  {/*--------------------------*/}
    //  <Slide index={5}>
    //    <Image src="https://source.unsplash.com/random/800x600" alt="random" />
    //  </Slide>