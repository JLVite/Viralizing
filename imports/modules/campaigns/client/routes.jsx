import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Campaigns from '../ui/layouts/campaigns';
import List from '../ui/containers/list';
import Edit from '../ui/containers/edit';
import View from '../ui/containers/view';
import PartOf from '../ui/containers/part-of';

export default (
  <Route path="/campaigns" component={Campaigns}>
    <IndexRoute component={List}/>
    <Route path="own" component={List}/>
    <Route path="part-of" component={PartOf}/>
    <Route path="edit/:campaignID" component={Edit}/>
    <Route path="view/:campaignID" component={View}/>
  </Route>
);

