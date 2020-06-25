import React, { Component } from "react";

import Category from "../Category/Category";

import CATEGORY_DATA from "./CategoryData.js";

import "./CategoryList.scss";

export default class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: CATEGORY_DATA,
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((category) => (
          <Category key={category.id} title={category.title} />
        ))}
      </div>
    );
  }
}
