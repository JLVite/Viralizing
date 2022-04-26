import FacebookConnection from '../connection';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
// Analytics
Meteor.methods({
  'facebook-groups-list': function (accountID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    const fbID = connection.id;
    let arr = ['id', 'cover', 'email', 'member_count', 'name', 'owner', 'permissions'];
    let Facebook = FacebookConnection(connection.accessToken);
    if (Facebook) {
      let client = Meteor.wrapAsync(Facebook.napi, Facebook);
      let res = client(`${fbID}/groups?fields=${arr.join(',')}`);
      res = { data: res.data.map(group => Object.assign({}, group, { access_token: connection.accessToken })) };
      console.log('FACEBOOK-GROUPS', res);
      return res;
    }
  },
});
