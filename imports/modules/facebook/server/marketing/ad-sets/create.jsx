import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-adsets-create': function (accountID, adAccount, options) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let AdSetexample = {
      'name': 'My New Ad Set',
      'optimization_goal': 'REACH',
      'adLabels': ['sad', 'das'],
      'daily_budget': 2000,
      'bid_amount': 2,
      'start_time': '2018-09-12 23:59:56-07:00',
      'end_time': '2018-09-15 23:59:56-07:00',
      'billing_event': 'IMPRESSIONS',
      'campaign_id': '23842849843970485',
      'status': 'PAUSED',
      'targeting': {
        'user_device': ['Galaxy S6', 'One m9'],
        'user_os': ['android'],
        'geo_locations': { 'countries': ['US'] },
        'publisher_platforms': ['facebook']
      }
    };
    const validObj = {
      'name': 'My date tesdasfttt ' + String(new Date()),
      'adLabels': ['sad', 'das'],
      'daily_budget': 2000,
      'bid_amount': 2,
      'start_time': '22-06-2018 12:00',
      'end_time': '26-06-2018 12:00',
      'billing_event': 'IMPRESSIONS',
      'campaign_id': '23842849843970485',
      'status': 'PAUSED',
      'targeting': {
        'user_device': ['Galaxy S6', 'One m9'],
        'user_os': ['android'],
        'geo_locations': { 'countries': ['US'] },
        'publisher_platforms': ['facebook']
      }
    };
    /* these fields are the problem when requesting with the API */
    options.targeting.user_device = validObj.targeting.user_device;
    options.campaign_id = validObj.campaign_id;
    /*options = {...options, ...validObj}*/
    //options.targeting = validObj.targeting;
    console.log(accountID, adAccount);
    console.log('ADSETS CREATE', options);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    try {
      let res = client(`${adAccount}/adsets`, 'post', options);
      return res;
    } catch (e) {
      console.log(e);
      return {
        status: 'error',
        error: e
      };
    }

  }
});
