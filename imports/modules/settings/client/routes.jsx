import React from 'react';
import { Route } from 'react-router';

import Settings from '../ui/layouts/settings';

const SettingsRoutes = (
  <Route path="settings/:tab" component={Settings}/>
);

export default SettingsRoutes;
