import React, { Component } from "react";
import "./LeftContent.scss";

export default class LeftContent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="left-teaser-container">
        <div className="content">
          <h1 className="headertext">
            Fashion <br />
            is instant <br />
            language
          </h1>
          <p className="subtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            inventore amet nesciunt rem?
          </p>
          <button>shop now</button>
        </div>
      </div>
    );
  }
}
