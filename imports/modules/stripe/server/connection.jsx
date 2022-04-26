import Stripe from 'stripe';

let StripeConneciton = function () {
  let client = Stripe(Meteor.settings.private.stripe.secretKey);
  return client;
};

export default StripeConneciton;
