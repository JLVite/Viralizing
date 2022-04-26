import { Meteor } from 'meteor/meteor';

Accounts.oauth.tryConnectAfterPopupClosed = function (credentialToken, callback) {
  //console.log("tryConnectAfterPopupClosed", credentialToken, callback);
  let credentialSecret = OAuth._retrieveCredentialSecret(credentialToken) || null;
  let options = {
    oauth: {
      credentialToken: credentialToken,
      credentialSecret: credentialSecret
    }
  };
  //console.log("Before Meteor Call", options);
  Meteor.call('addLoginService', options, function (error, res) {
    //console.log("After Meteor Call",arguments);
    if (callback) {
      callback(error, res);
    }
  });
};

Accounts.oauth.connectCredentialRequestCompleteHandler = function (callback) {
  return function (credentialTokenOrError) {
    //console.log("connectCredentialRequestCompleteHandler",credentialTokenOrError);
    if (credentialTokenOrError && credentialTokenOrError instanceof Error) {
      if (callback) {
        callback(credentialTokenOrError);
      }
    } else {
      Accounts.oauth.tryConnectAfterPopupClosed(credentialTokenOrError, callback);
    }
  };
};

let makePascalCased = function (word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

Meteor.connectWith = function (service, options, callback) {
  // Support a callback without options
  if (!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  let connectCredentialRequestCompleteCallback = Accounts.oauth.connectCredentialRequestCompleteHandler(callback);
  let Service;
  if (service === 'instagram') {
    Service = Package['bozhao:accounts-instagram'].Instagram;
  } else {
    Service = typeof service === 'string' ? Package[service + '-oauth'][makePascalCased(service)] : service;
  }
  Service.requestCredential(options, connectCredentialRequestCompleteCallback);
};
