import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Advertising from '../ui/layouts/advertising';
//import Layout from "../ui/layouts/layout";
import Facebook from '../ui/layouts/facebook';
import Google from '../ui/layouts/google';
import AccountsList from '../ui/containers/accounts';
import FacebookCampaignsList from '../ui/containers/facebook/campaigns/list';
import FacebookCampaignsView from '../ui/containers/facebook/campaigns/view';
import GoogleCampaignsList from '../ui/containers/facebook/campaigns/list';
import GoogleCampaignsView from '../ui/containers/facebook/campaigns/view';

export default (
  <Route path="/advertising" component={Advertising}>
    <IndexRoute component={AccountsList}/>
    <Route path="/advertising/facebook" component={Facebook}>
      <Route path="/advertising/facebook/:accountID/:adAccountID" component={FacebookCampaignsList}>
      </Route>
      <Route path="/advertising/facebook/:accountID/:adAccountID/:campaignID" component={FacebookCampaignsView}/>
    </Route>
    <Route path="/advertising/google" component={Google}>
      <Route path="/advertising/google/:accountID/:adAccountID" component={GoogleCampaignsList}>
      </Route>
      <Route path="/advertising/google/:accountID/:adAccountID/:campaignID" component={GoogleCampaignsView}/>
    </Route>
  </Route>
);

