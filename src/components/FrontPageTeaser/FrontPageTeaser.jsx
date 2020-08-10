import React from "react";

// import CategoryList from "./CategoryList/CategoryList";
import LeftContent from "./LeftContent/LeftContent";
import TeaserSlider from "./TeaserSlider/TeaserSlider";

import "./FrontPageTeaser.scss";

const FrontPageTeaser = props => (
  <div className="teaser-container">
    <LeftContent />
    <TeaserSlider targetGroups={props.targetGroups} />
  </div>
);

export default FrontPageTeaser;

// const FrontPageTeaser = () => (
//   <div className="teaser-container">
//     <div className="teaser-text-container">
//       <p className="teaser-text-headline">TARJOUS</p>
//       <p className="teaser-text-content">
//         Tarjoustekstiä Tarjoustekstiä Tarjoustekstiä Tarjoustekstiä
//         TarjoustekstiäT arjoustekstiäTarjoustekstiä
//       </p>
//     </div>
//     <div className="category-container">
//       <CategoryList />
//     </div>
//   </div>
// );
