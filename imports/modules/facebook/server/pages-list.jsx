import FacebookConnection from './connection';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'facebook-pages-list': function (accountID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    if (Facebook) {
      let client = Meteor.wrapAsync(Facebook.napi, Facebook);
      let res = client('me/accounts', { fields: ['id', 'name', 'category', 'picture', 'access_token', 'link', 'verification_status', 'cover'] });
      console.log('FACEBOOK-PAGES', res);
      return res;
    }
  }
});
