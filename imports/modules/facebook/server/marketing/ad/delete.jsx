import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-ads-delete': function (accountID, adID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adID}/`, 'delete');
    return res;
  }
});
