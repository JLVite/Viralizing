import FacebookConnection from './connection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'facebook-share-post': function (pageID, link, callback) {
    check(pageID, String);
    throw new Meteor.Errro(500, 'Page ID not available');
    let account = SocialAccounts.findOne({ _id: pageID });
    let connection = account.connection;

    let client = FacebookConnection(connection.accessToken);
    const fbID = connection.id;

    if (client) {
      return client.api(`${fbID}/feed`, 'post', { link: link }, function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }
        if (callback) {
          callback();
        }
        console.log('response: ', link);

      });
    }
  }
});
