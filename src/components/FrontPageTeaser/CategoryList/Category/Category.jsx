import React from "react";

import "./Category.scss";

const Category = ({ title }) => (
  <div
    className="category"
    onClick={() => console.log(`siirtyminen kategoriaan: ${title}`)}
  >
    <div className="category-content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default Category;
