import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Statement from '../ui/layouts/statement';
import Layout from '../ui/layouts/layout';

export default (
  <Route path="/statement" component={Statement}>
    <IndexRoute component={Layout}/>
  </Route>
);

