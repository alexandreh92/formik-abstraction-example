import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Default from '~/layouts/Default';

import SimpleInputExample from '~/pages/SimpleInputExample';
import AsyncInitialValuesExample from '~/pages/AsyncInitialValuesExample';
import ArrayInputStringExample from '~/pages/ArrayInputStringExample';
import ArrayInputObjectExample from '~/pages/ArrayInputObjectExample';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Default>
        <Switch>
          <Route exact path="/" component={SimpleInputExample} />
          <Route exact path="/simple_input" component={SimpleInputExample} />
          <Route
            exact
            path="/async_values"
            component={AsyncInitialValuesExample}
          />
          <Route
            exact
            path="/array_input_string"
            component={ArrayInputStringExample}
          />
          <Route
            exact
            path="/array_input_object"
            component={ArrayInputObjectExample}
          />
        </Switch>
      </Default>
    </BrowserRouter>
  );
};

export default Routes;
