import React from 'react';

import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Banner from './Banner/Banner';

function Toolbar() {
  return (
    <header className={classes.Toolbar} >
      <div className={classes.Logo}>
        <Banner />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;