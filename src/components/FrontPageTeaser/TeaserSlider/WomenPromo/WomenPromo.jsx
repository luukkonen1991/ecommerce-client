import React, { Component } from "react";
import "./WomenPromo.scss";
import img from "./womens.png";

const WomenPromo = () => {
  return (
    <div className="women-promo">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="content">
        <h1 className="title">WOMENS</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default WomenPromo;
