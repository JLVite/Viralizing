import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Code from '../ui/layouts/code';
import Layout from '../ui/layouts/layout';

export default (
  <Route path="/code" component={Code}>
    <IndexRoute component={Layout}/>
  </Route>
);

