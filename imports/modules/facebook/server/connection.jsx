import { Facebook, FacebookApiException } from 'fb';

let FacebookConnection = function (token) {
  return new Facebook({
    appId: Meteor.settings.private.networks.facebook.appId,
    appSecret: Meteor.settings.private.networks.facebook.secret,
    accessToken: token,
    version: 'v3.0'
  });
};

export default FacebookConnection;
