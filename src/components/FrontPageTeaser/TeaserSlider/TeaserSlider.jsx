import React, { useState } from "react";
import "./TeaserSlider.scss";
import WomenPromo from "../WomenPromo/WomenPromo";
import MenPromo from "../MenPromo/MenPromo";

function TeaserSlider() {
  let sliderArr = [<WomenPromo />, <MenPromo />];

  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log("click " + x);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    console.log("after click " + x);
  };
  const goRight = () => {
    console.log("click " + x);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    console.log("after click " + x);
  };

  return (
    <div className="teaser-slider">
      {sliderArr.map((slide, i) => {
        return (
          <div
            key={i}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {slide}
          </div>
        );
      })}

      <button id="goLeft" className="moveleft" onClick={goLeft}>
        LEFT
      </button>
      <button id="goRight" className="moveright" onClick={goRight}>
        RIGHT
      </button>
    </div>
  );
}

export default TeaserSlider;
