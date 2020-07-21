import React from "react";

// import CategoryList from "../CategoryList/CategoryList";
import FrontPageTeaser from "../../components/FrontPageTeaser/FrontPageTeaser";
import Carousel from '../../components/UI/Carousel/Carousel';

import "./Home.scss";

const Home = () => {
  return (
    <div className="homepage-container">
      <FrontPageTeaser />
      <Carousel />
    </div>
  );
};

export default Home;
