import { Meteor } from 'meteor/meteor';
import TwitterConnection from './connection';

Meteor.methods({
  'twitter-search': function (query) {
    let account = SocialAccounts.findOne({
      network: 'twitter',
      connection: { $exists: true }
    });
    let connection = account.connection;
    /*connection={
        accessToken:"825526971505446912-BKiaP4KjYkYFfMCmYDc2AkLZjpcLkV0",
        accessTokenSecret:"UZXTVYOiaIgh50kaDxNFRSx9wbAzWF67ndT9UFvcWurto"
    }*/
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let syncClient = Meteor.wrapAsync(client.get, client);
    return syncClient('search/tweets', { q: query, count: 100 });
  }
});
