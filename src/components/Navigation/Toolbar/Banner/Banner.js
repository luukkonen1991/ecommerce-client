import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./Banner.module.scss";
const Banner = () => {
  const history = useHistory();

  console.log(history);
  return (
    <div className={classes.Banner} onClick={() => history.push("/")}>
      <p>Banner logo here</p>
    </div>
  );
};

export default Banner;
