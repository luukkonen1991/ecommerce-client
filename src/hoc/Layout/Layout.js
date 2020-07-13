import React from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import "./Layout.module.scss";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
