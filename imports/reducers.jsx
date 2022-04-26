import { combineReducers } from 'redux';
import ApolloClient from 'apollo-client';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';
import { meteorClientConfig } from 'meteor/apollo';

import Modules from './modules/bundles/client';

const apolloClient = new ApolloClient(meteorClientConfig());
//Define Reducers Object
let reducers = {
  routing: routerReducer,
  form: reduxFormReducer,
  i18n: i18nReducer,
  apollo: apolloClient.reducer()
};

//Add all reducers from Modules
for (let key in Modules) {
  let AppModule = Modules[key];
  let moduleReducers = AppModule.reducers || false;
  if (moduleReducers) {
    for (mkey in moduleReducers) {
      reducers[mkey] = moduleReducers[mkey];
    }
  }
}

const rootReducer = combineReducers(reducers);

export { apolloClient };
export default rootReducer;
