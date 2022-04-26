import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-targeting-fields': function (accountID, data) {
    console.log('ACCOUNT_ID', accountID);
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    console.log('fb-marketing-targeting-fields', accountID, data);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`/search`, data);

    return res;
  }
});
