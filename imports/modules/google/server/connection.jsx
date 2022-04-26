import GoogleSearch from 'google-search';

let GoogleSearchConnection = function () {
  return new GoogleSearch({
    key: Meteor.settings.private.networks.google.searchApiKey,
    cx: '001142422321320148592:ikfvsltk4bw'
  });
};

export default GoogleSearchConnection;
