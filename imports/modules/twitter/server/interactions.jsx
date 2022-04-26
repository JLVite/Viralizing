import TwitterConnection from './connection';
import { encode, decode } from 'node-base64-image';

Meteor.methods({
  'twitter-follow-profile': function (connection, screen_name, callback) {
    if (typeof (connection) === 'string') {
      let account = SocialAccounts.findOne({ _id: connection });
      connection = account.connection;
    }
    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('friendships/create', { screen_name }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }
        console.log(tweet);
        if (callback) {
          callback();
        }
      });
    }
  },

  'twitter-unfollow-profile': function (connection, screen_name, callback) {
    if (typeof (connection) === 'string') {
      let account = SocialAccounts.findOne({ _id: connection });
      connection = account.connection;
    }
    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('friendships/destroy', { screen_name }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }
        console.log(tweet);
        if (callback) {
          callback();
        }
      });
    }
  },

  'twitter-retweet': function (connection, id, callback) {
    if (typeof (connection) === 'string') {
      let account = SocialAccounts.findOne({ _id: connection });
      connection = account.connection;
    }
    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('statuses/retweet', { id }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }
        console.log(tweet);
        if (callback) {
          callback();
        }
      });
    }
  },

  'twitter-like': function (connection, id, callback) {
    if (typeof (connection) === 'string') {
      let account = SocialAccounts.findOne({ _id: connection });
      connection = account.connection;
    }
    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('favorites/create', { id }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }
        console.log(tweet);
        if (callback) {
          callback();
        }
      });
    }
  },

});
