import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

import Catalog from './pages/Catalog';
import Product from './pages/Product';

function Routes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Catalog} />
        <Route path="/produto/:name/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
