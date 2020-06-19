import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Nav';

import Catalog from './pages/Catalog';

function Routes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Catalog} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
