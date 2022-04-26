import Twitter from 'twitter';

let TwitterConnection = function (key, secret) {
  return new Twitter({
    consumer_key: Meteor.settings.private.networks.twitter.consumerKey,
    consumer_secret: Meteor.settings.private.networks.twitter.secret,
    access_token_key: key,
    access_token_secret: secret
  });
};

export default TwitterConnection;
