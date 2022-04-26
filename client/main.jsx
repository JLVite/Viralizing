import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Buffer from 'buffer';
import 'switchery';

global.Buffer = global.Buffer || Buffer;
Buffer = global.Buffer;

// Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import store, { history, apollo } from '../imports/store';
import { apolloClient } from '../imports/reducers';

//CSS

// import 'react-select/dist/react-select.css';
import 'react-phone-input-2/dist/style.css'
import 'react-datepicker/dist/react-datepicker.css';

//Stripe
import { Elements, StripeProvider } from 'react-stripe-elements';

//Import Routes
import { Routes } from '../imports/modules/core/client/routes';

//Create Router
const router = (
  <StripeProvider stripe={window.Stripe(Meteor.settings.public.stripe.publishableKey)}>
    <Elements>
      <ApolloProvider store={store} client={apolloClient}>
        <Router history={history}>
          {Routes}
        </Router>
      </ApolloProvider>
    </Elements>
  </StripeProvider>
);

Meteor.startup(() => {
  render(router, document.getElementById('root'));
});
