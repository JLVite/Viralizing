import TwitterConnection from './connection';

Meteor.methods({
  'twitter-trends-available': function () {
    let account = SocialAccounts.findOne({
      network: 'twitter',
      connection: { $exists: true }
    });
    let connection = account.connection;

    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      let syncClient = Meteor.wrapAsync(client.get, client);
      return syncClient('trends/available');
    }
  },
  'twitter-trends-place': function (woeid) {
    let account = SocialAccounts.findOne({
      network: 'twitter',
      connection: { $exists: true }
    });
    let connection = account.connection;

    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      let syncClient = Meteor.wrapAsync(client.get, client);
      try {
        return syncClient('trends/place', { id: woeid });
      } catch (e) {
        return [{ trends: [] }];
      }
    }
  },
  'twitter-find-promoted-trending': function () {
    let places = Meteor.call('twitter-trends-available');

    let promoted = [];
    places.forEach((place, index) => {
      if (index > 70) return;
      let trendings = Meteor.call('twitter-trends-place', place.woeid);
      trendings.forEach((trend) => {
        if (trend.promoted_content) {
          promoted.push(trend);
        }
      });
    });
    return promoted;
  }
});
