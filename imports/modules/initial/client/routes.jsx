import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Reporter from '../ui/layouts/reporter';
import List from '../ui/layouts/list';
import Edit from '../ui/layouts/edit';

export default (
  <Route path="/reporter" component={Reporter}>
    <IndexRoute component={List}/>
    <Route path="edit/:accountID" component={Edit}/>
  </Route>
);

