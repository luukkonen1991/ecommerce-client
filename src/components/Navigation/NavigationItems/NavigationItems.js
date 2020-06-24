import React from 'react';

import classes from './NavigationItems.module.scss';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems} >
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  );
};

export default NavigationItems;
