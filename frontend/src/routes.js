import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Nav';

import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';

function Routes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Catalog} />
        <Route path="/product/:name" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
