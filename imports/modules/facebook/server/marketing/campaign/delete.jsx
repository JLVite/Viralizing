import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-campaign-delete': function (accountID, campaignID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${campaignID}/`, 'delete');
    return res;
  }
});
