import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Nav';

import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;