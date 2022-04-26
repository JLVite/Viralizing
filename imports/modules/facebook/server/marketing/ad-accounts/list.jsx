import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-adAccounts-list': function (accountID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client('me/adaccounts', { fields: ['name', 'account_status', 'business', 'account_id', 'id', 'partner', 'balance', 'currency', 'end_advertiser', 'end_advertiser_name', 'created_time', 'amount_spent'] });
    return res.data;
  }
});
