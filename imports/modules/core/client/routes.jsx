import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Core from '../ui/layouts/core';
import Auth from '../ui/layouts/auth';
import Home from '../ui/layouts/home';
import { NotFound } from '../ui/layouts/not-found';

//Temp Fix
import ExampleRoutes from '../../examples/client/routes';
import SettingsRoutes from '../../settings/client/routes';
import AccountRoutes from '../../accounts/client/routes';
import CampaignsRoutes from '../../campaigns/client/routes';
import ReporterRoutes from '../../reporter/client/routes';
import AgendaRoutes from '../../agenda/client/routes';
import SearchRoutes from '../../search/client/routes';
import CodeRoutes from '../../code/client/routes';
import StatementRoutes from '../../statement/client/routes';
import PricingRoutes from '../../pricing/client/routes';
import TeamAttackRoutes from '../../teamattack/client/routes';
import AdvertisingRoutes from '../../advertising/client/routes';

function requireAuth(nextState, replace) {
  if (!Meteor.user()) {
    localStorage.setItem('redirect-to', window.location.pathname);
    replace({
      pathname: '/auth/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

const Routes = (
  <Route path="/" component={Core}>
    <IndexRoute component={Home} onEnter={requireAuth}/>
    <Route path="auth/:action" component={Auth}/>
    {ExampleRoutes}
    {SettingsRoutes}
    {AccountRoutes}
    {CampaignsRoutes}
    {ReporterRoutes}
    {AgendaRoutes}
    {SearchRoutes}
    {CodeRoutes}
    {StatementRoutes}
    {PricingRoutes}
    {TeamAttackRoutes}
    {AdvertisingRoutes}
    <Route path="*" component={NotFound}/>
  </Route>
);

export { Routes };
