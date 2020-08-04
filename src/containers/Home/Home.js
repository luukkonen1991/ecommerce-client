import React, { useState, useEffect } from "react";

// import CategoryList from "../CategoryList/CategoryList";
import FrontPageTeaser from "../../components/FrontPageTeaser/FrontPageTeaser";
import SuperPromoCarousel from '../../components/SuperPromoCarousel/SuperPromoCarousel';
// import Carousel from '../../components/UI/Carousel/Carousel';

import { fetchAllProducts } from '../../services/ProductService';
import { fetchAllTargetGroups } from '../../services/TargetGroupService';

import "./Home.scss";

const Home = () => {
  const [targetGroups, setTargetGroups] = useState([]);
  const [superPromoItems, setSuperPromoItems] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then(resp => {
        console.log(resp.data.data);
        setSuperPromoItems(resp.data.data);
      });
  }, []);

  useEffect(() => {
    fetchAllTargetGroups()
      .then(resp => {
        console.log(resp.data.data);
        setTargetGroups(resp.data.data);
      });
  }, []);

  return (
    <div className="homepage-container">
      <FrontPageTeaser targetGroups={targetGroups} />
      <SuperPromoCarousel superPromoItems={superPromoItems} />
    </div>
  );
};

export default Home;
