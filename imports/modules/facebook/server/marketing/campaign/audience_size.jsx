import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-campaigns-audience': function (accountID, AdAccount, data) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    console.log('fb-marketing-campaigns-audience', accountID, AdAccount, data);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${AdAccount}/reachestimate`, data);

    return res;
  }
});
