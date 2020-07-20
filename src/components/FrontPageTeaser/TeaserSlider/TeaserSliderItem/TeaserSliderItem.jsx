import React, { useEffect } from "react";

import "./TeaserSliderItem.scss";
import men from "./men.png";
import women from "./womens.png";
import boys from "./men.png";
import girls from "./womens.png";


const TeaserSliderItem = (props) => {
  const titleArr = ['MEN', 'WOMEN', 'BOYS', 'GIRLS'];
  const imgArr = [men, women, boys, girls];
  const { count } = props;

  useEffect(() => {
    console.log('propsCount', count);
  }, [count]);

  return (
    <div className="item-promo" key={props.count}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgArr[count]})` }}
      ></div>
      <div className="content">
        <h1 className="title">{titleArr[count]}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default TeaserSliderItem;
