import React, { Component } from "react";
import "./MenPromo.scss";
import img from "./men.png";

const MenPromo = () => {
  return (
    <div className="men-promo">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="content">
        <h1 className="title">MENS</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenPromo;
