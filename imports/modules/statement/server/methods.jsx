import { Meteor } from 'meteor/meteor';
import Schema from '../../../server/schemas/payments/schema';

Meteor.methods({
  'payments-create-fake': function () {
    let user = Meteor.user();
    let accounts = SocialAccounts.find({}, { fields: { _id: 1 } }).fetch();
    accounts = [...accounts, ...accounts, ...accounts];
    let cards = ['Visa', 'Amex', 'MasterCard', 'Discover'];
    let payments = accounts.map(a => Object.assign({}, Schema, {
      status: 'completed',
      from: user._id,
      to: a._id,
      campaign: Math.round(Math.random()) ? 'FGHsw43uezjudkN2p' : 'XEuAEdnJL57WobBKN',
      amount: Math.round(Math.random() * 100000),
      date: moment().subtract(Math.floor(Math.random() * 600), 'days').toDate(),
      paymentMethod: {
        brand: cards[Math.floor(Math.random() * 4)],
        last4: String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10))
      }
    }));

    return payments.map(p => Payments.insert(p));
  }
});
