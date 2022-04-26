import React from 'react';
import { Route, IndexRoute } from 'react-router';

import TeamAttack from '../ui/layouts/teamattack';
import List from '../ui/containers/list';
import Edit from '../ui/containers/edit';

export default (
  <Route path="/team-attack" component={TeamAttack}>
    <IndexRoute component={List}/>
    <Route path="edit/:teamAttackID" component={Edit}/>
  </Route>
);

