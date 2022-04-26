import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Reporter from '../ui/layouts/reporter';
import List from '../ui/containers/list';
import Edit from '../ui/containers/edit';

export default (
  <Route path="/reporter" component={Reporter}>
    <IndexRoute component={List}/>
    <Route path="edit/:reportID" component={Edit}/>
  </Route>
);

