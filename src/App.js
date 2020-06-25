
import React from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';


const App = props => {
  return (
    <Layout>
      <Home />
    </Layout>

  );
};

export default App;
