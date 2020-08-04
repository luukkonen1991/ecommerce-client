import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Spinner from '../../../UI/Spinner/Spinner';
import "./TeaserSliderItem.scss";
import men from "./men.png";
import women from "./womens.png";
import boys from "./men.png";
import girls from "./womens.png";


const TeaserSliderItem = props => {
  const [targetGroupItemData, setTargetGroupItemData] = useState();
  // const titleArr = ['MEN', 'WOMEN', 'BOYS', 'GIRLS'];
  const imgArr = [men, women, boys, girls];
  const { count, targetGroupItem } = props;

  useEffect(() => {
    console.log('[TeaserSliderComponent Rendered]');
    // setTargetGroupItem(targetGroupItemProp);
    // console.log('propsCount', count);
    console.log('[targetGroup]', targetGroupItem);
    setTargetGroupItemData(targetGroupItem);
  }, [targetGroupItem]);

  console.log(targetGroupItemData, '[ITEM!]');

  if (!targetGroupItem) {
    return <Spinner />;
  } else {
    return (
      <div className="item-promo" key={props.count}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imgArr[count]})` }}
        >
        </div>
        <Link className="content" to={`shop/${targetGroupItem.title}`} >
          <h1 className="title">{targetGroupItem.title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </Link>
      </div>
    );
  }
};

export default TeaserSliderItem;
