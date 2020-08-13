import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SimpleInput from '~/pages/SimpleInput';
import AsyncInitialValues from '~/pages/AsyncInitialValues';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SimpleInput} />
        <Route exact path="/simple_input" component={SimpleInput} />
        <Route exact path="/async_values" component={AsyncInitialValues} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
