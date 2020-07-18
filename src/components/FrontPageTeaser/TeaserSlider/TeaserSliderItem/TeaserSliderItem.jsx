import React, { useEffect } from "react";

import Slide from 'react-reveal/Slide';

import "./TeaserSliderItem.scss";
import men from "./men.png";
import women from "./womens.png";
import boys from "./men.png";
import girls from "./womens.png";


const TeaserSliderItem = (props) => {
  const titleArr = ['MEN', 'WOMEN', 'BOYS', 'GIRLS'];
  const imgArr = [men, women, boys, girls];
  const { count, direction } = props;

  useEffect(() => {
    console.log('props', count);
  }, [count]);

  return (
    <div className="item-promo" key={props.count}>
      {direction === 'right' ? <Slide right duration={500}><div
        className="background-image"
        style={{ backgroundImage: `url(${imgArr[count]})` }}
      ></div>
      </Slide> : <Slide left duration={500}><div
        className="background-image"
        style={{ backgroundImage: `url(${imgArr[count]})` }}
      ></div>
        </Slide>}
      <div className="content">
        <h1 className="title">{titleArr[count]}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default TeaserSliderItem;
