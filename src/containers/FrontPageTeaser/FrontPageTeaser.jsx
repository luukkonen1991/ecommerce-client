import React from "react";

import CategoryList from "../CategoryList/CategoryList";

import "./FrontPageTeaser.scss";

const FrontPageTeaser = () => (
  <div className="teaser-container">
    <div className="teaser-text-container">
      <p className="teaser-text-headline">TARJOUS</p>
      <p className="teaser-text-content">
        Tarjoustekstiä Tarjoustekstiä Tarjoustekstiä Tarjoustekstiä
        TarjoustekstiäT arjoustekstiäTarjoustekstiä
      </p>
    </div>
    <div className="category-container">
      <CategoryList />
    </div>
  </div>
);

export default FrontPageTeaser;
