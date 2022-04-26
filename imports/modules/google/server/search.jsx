import GoogleSearchConnection from './connection';

Meteor.methods({
  'google-search': function (query) {
    let client = GoogleSearchConnection();
    let syncClient = Meteor.wrapAsync(client.build, client);
    return syncClient({
      q: query,
      start: 5,
      num: 10 // Number of search results to return between 1 and 10, inclusive
    });
  }
});
