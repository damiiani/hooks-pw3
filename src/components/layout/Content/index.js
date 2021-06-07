import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Hooks from '../../../views/contents/Hooks';
import UseState from '../../../views/contents/UseState';
import NotFound from '../../../views/contents/NotFound';

import './styles.css';

function Content() {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Hooks />
        </Route>
        <Route path="/useState">
          <UseState />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
