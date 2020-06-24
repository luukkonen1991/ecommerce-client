import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

let routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);

const App = props => {
  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default App;
