import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Pricing from '../ui/layouts/pricing';
import Layout from '../ui/layouts/layout';

export default (
  <Route path="/pricing" component={Pricing}>
    <IndexRoute component={Layout}/>
  </Route>
);

