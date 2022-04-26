import TwitterConnection from './connection';
import { encode, decode } from 'node-base64-image';

Meteor.methods({
  'twitter-update-profile-photo': function (connection, coverURL, callback) {
    if (typeof (connection) === 'string') {
      let account = SocialAccounts.findOne({ _id: connection });
      connection = account.connection;
    }
    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return encode(coverURL, { string: true }, function (err, image) {
        if (err) {
          console.log('Error: ' + err);
        }
        //console.log('image: ',res)
        return client.post('account/update_profile_image', { image }, function (error, tweet, response) {
          if (error) {
            console.log('Error: ', error);
          }
          console.log(tweet);
          if (callback) {
            callback();
          }
        });
      });
    }
  },

  'twitter-update-cover-photo': function (connection, coverURL, callback) {
    if (typeof (connection) === 'string') {
      let account = SocialAccounts.findOne({ _id: connection });
      connection = account.connection;
    }
    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return encode(coverURL, { string: true }, function (err, banner) {
        if (err) {
          console.log('Error: ' + err);
        }
        //console.log('image: ',res)
        return client.post('account/update_profile_banner', { banner }, function (error, tweet, response) {
          if (error) {
            console.log('Error: ', error);
          }
          if (callback) {
            callback();
          }
        });
      });
    }
  },
});
