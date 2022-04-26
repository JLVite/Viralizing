import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createReactiveMiddlewares from 'meteor-redux-middlewares';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translations from './translations';

// import the root reducer
import rootReducer, { apolloClient } from './reducers';

// create an object for the default data
const defaultState = {};

const {
  sources,
  subscriptions
} = createReactiveMiddlewares(Tracker);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(
  applyMiddleware(apolloClient.middleware(), sources, subscriptions, thunk)
));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));

let defaultLanguage = window.localStorage.getItem('APPLICATION_LANGUAGE') || 'es';
store.dispatch(setLocale(defaultLanguage));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
