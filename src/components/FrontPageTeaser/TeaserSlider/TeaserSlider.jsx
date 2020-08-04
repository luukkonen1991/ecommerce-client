import React, { useState } from 'react';

// import Spinner from '../../UI/Spinner/Spinner'
import TeaserSliderItem from './TeaserSliderItem/TeaserSliderItem';
import "./TeaserSlider.scss";

const TeaserSlider = props => {
  const [count, setCount] = useState(0);
  console.log(count);


  const incrementHandler = () => {
    setCount(prevCount => prevCount + 1);
    if (count >= (props.targetGroups.length - 1)) {
      setCount(0);
    }
  };
  const decrementHandler = () => {
    setCount(prevCount => prevCount - 1);
    if (count <= 0) {
      setCount((props.targetGroups.length - 1));
    }
  };

  return (
    <div className="teaser-slider">
      <div className="slide">
        <TeaserSliderItem count={count} targetGroupItem={props.targetGroups[count]} />
      </div>
      <button id="goLeft" className="moveleft" onClick={decrementHandler}>
        LEFT
    </button>
      <button id="goRight" className="moveright" onClick={incrementHandler}>
        RIGHT
    </button>
    </div>
  );
};

export default TeaserSlider;;







// import React, { useState } from "react";
// import "./TeaserSlider.scss";
// import WomenPromo from "./WomenPromo/WomenPromo";
// import MenPromo from "./MenPromo/MenPromo";

// function TeaserSlider() {
//   let sliderArr = [<WomenPromo />, <MenPromo />];

//   const [x, setX] = useState(0);

//   const goLeft = () => {
//     console.log("click " + x);
//     x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
//     console.log("after click " + x);
//   };
//   const goRight = () => {
//     console.log("click " + x);
//     x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
//     console.log("after click " + x);
//   };

// return (
//   <div className="teaser-slider">
//     {sliderArr.map((slide, i) => {
//       return (
//         <div
//           key={i}
//           className="slide"
//           style={{ transform: `translateX(${x}%)` }}
//         >
//           {slide}
//         </div>
//       );
//     })}

//     <button id="goLeft" className="moveleft" onClick={goLeft}>
//       LEFT
//       </button>
//     <button id="goRight" className="moveright" onClick={goRight}>
//       RIGHT
//       </button>
//   </div>
// );
// }

// export default TeaserSlider;
