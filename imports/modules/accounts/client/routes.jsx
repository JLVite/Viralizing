import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Accounts from '../ui/layouts/accounts';
import Invite from '../ui/containers/invite';
import List from '../ui/containers/list';
import Edit from '../ui/containers/edit';
import View from '../ui/containers/view';

export default (
  <Route path="/accounts" component={Accounts}>
    <IndexRoute component={List}/>
    <Route path="edit/:accountID" component={Edit} />
    <Route path="view/:accountID" component={View}/>
    <Route path="invite/:inviteID" component={Invite}/>
  </Route>
);

