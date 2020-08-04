import React, { useEffect, useState } from "react";

// import Spinner from '../../../UI/Spinner/Spinner';
import "./TeaserSliderItem.scss";
import men from "./men.png";
import women from "./womens.png";
import boys from "./men.png";
import girls from "./womens.png";


const TeaserSliderItem = props => {
  const [targetGroupItemData, setTargetGroupItemData] = useState();
  const titleArr = ['MEN', 'WOMEN', 'BOYS', 'GIRLS'];
  const imgArr = [men, women, boys, girls];
  const { count, targetGroupItem } = props;

  useEffect(() => {
    // setTargetGroupItem(targetGroupItemProp);
    console.log('propsCount', count);
    console.log('[targetGroup]', targetGroupItem);
    setTargetGroupItemData(targetGroupItem);
  }, [count, targetGroupItem]);

  console.log(targetGroupItemData, '[ITEM!]');

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
