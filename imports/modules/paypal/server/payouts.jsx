import { Meteor } from 'meteor/meteor';
import PaypalConnection from './connection';
import accounts from '../../../server/schemas/accounts/resolvers/accounts';

Meteor.methods({
  'paypal-payouts-create': function () {
    let sender_batch_id = Math.random().toString(36).substring(9);

    let create_payout_json = {
      'sender_batch_header': {
        'sender_batch_id': sender_batch_id,
        'email_subject': 'You have a payment'
      },
      'items': [
        {
          'recipient_type': 'EMAIL',
          'amount': {
            'value': 4.99,
            'currency': 'MXN'
          },
          'receiver': 'buyer140992@gmail.com',
          'note': 'Thank you.',
          'sender_item_id': 'item_1'
        },
        {
          'recipient_type': 'EMAIL',
          'amount': {
            'value': 3.90,
            'currency': 'MXN'
          },
          'receiver': 'luisjc140992-facilitator@gmail.com',
          'note': 'Thank you.',
          'sender_item_id': 'item_2'
        },
        {
          'recipient_type': 'EMAIL',
          'amount': {
            'value': 2.00,
            'currency': 'MXN'
          },
          'receiver': 'lejc140992@gmail.com',
          'note': 'Thank you.',
          'sender_item_id': 'item_3'
        }
      ]
    };
    let paypal = PaypalConnection();

    let client = Meteor.wrapAsync(paypal.payout.create, paypal.payout);

    try {
      return client(create_payout_json);
    } catch (e) {
      return e;
    }
  },
  'paypal-payouts-mass-create': function (arrItems) {
    // arrItems
    // [{
    //   'recipient_type': 'EMAIL',
    //   'amount': {
    //     'value': 15.99,
    //     'currency': 'MXN'
    //   },
    //   'receiver': 'example@gmail.com'
    // },]

    let sender_batch_id = Math.random().toString(36).substring(9);

    let create_payout_json = {
      'sender_batch_header': {
        'sender_batch_id': sender_batch_id,
        'email_subject': 'You have a payment'
      },
      'items': arrItems
    };
    let paypal = PaypalConnection();

    let client = Meteor.wrapAsync(paypal.payout.create, paypal.payout);

    try {
      const paymentObj = client(create_payout_json);
      const paymentID = paymentObj.batch_header.payout_batch_id
      let currentUser = Meteor.user();

      if(currentUser.paypal === undefined) currentUser.paypal = [];  

      obj = {
        address: paymentID,
        default: true,
        created: new Date()
      }

      currentUser.paypal.push(obj);
      Meteor.users.update({_id:Meteor.userId()},currentUser);
      return paymentObj
    } catch (e) {
      return e;
    }
  }
});
