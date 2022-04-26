import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Search from '../ui/layouts/search';
import SearchTabs from '../ui/layouts/tabs';

export default (
  <Route path="/search" component={Search}>
    <IndexRoute component={SearchTabs}/>
  </Route>
);

