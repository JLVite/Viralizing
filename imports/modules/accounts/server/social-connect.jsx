import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
/////////////////////////////
// OAuth related functions //
/////////////////////////////

let OAuthEncryption = Package['oauth-encryption'] && Package['oauth-encryption'].OAuthEncryption;

let makePascalCased = function (word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

let addOauthService = function (user, options) {
  console.log('addOauthService');
  check(options.oauth, {
    credentialToken: String,
    // When an error occurs while retrieving the access token, we store
    // the error in the pending credentials table, with a secret of
    // null. The client can call the login method with a secret of null
    // to retrieve the error.
    credentialSecret: Match.OneOf(null, String)
  });
  // Retrieve the pending credential object
  let result = OAuth.retrieveCredential(options.oauth.credentialToken, options.oauth.credentialSecret);
  if (!result) {
    // OAuth credentialToken is not recognized, which could be either
    // because the popup was closed by the user before completion, or
    // some sort of error where the oauth provider didn't talk to our
    // server correctly and closed the popup somehow.
    throw new Meteor.Error('Social network not connected.');
  }
  if (result instanceof Error) {
    // We tried to login, but there was a fatal error. Report it back
    // to the user.
    throw result;
  }

  let serviceName = result.serviceName;
  let serviceData = result.serviceData;

  // Service Must be valid
  if (serviceName !== 'facebook' && serviceName !== 'twitter' && serviceName !== 'instagram' && serviceName !== 'google') {
    throw new Meteor.Error(makePascalCased(serviceName) + ' is not supported');
  }
  // The user must not have used the service already
  let dbSocialAccount = SocialAccounts.findOne({ 'connection.id': serviceData.id });
  if (dbSocialAccount) {
    if (dbSocialAccount.delete) {
      SocialAccounts.update(dbSocialAccount._id, { $set: { delete: false } });
      return dbSocialAccount._id;
    } else {
      throw new Meteor.Error('This ' + makePascalCased(serviceName) + ' account is already connected');
    }
  }

  // The service must provide an `id` field
  if (!_.has(serviceData, 'id')) {
    throw new Meteor.Error('Service data for service ' + makePascalCased(serviceName) + ' must include id');
  }

  return Meteor.call('profile-create', user, result);
};

//////////////////////////////
// `addLoginService` method //
//////////////////////////////

Meteor.methods({
  addLoginService: function (options) {
    let user = Meteor.user();
    // Ensure the user is logged in
    if (!user) {
      throw new Meteor.Error('Login required');
    }
    // Check arguments
    check(options, Object);

    // Adding an oauth service
    if (options.oauth) {
      return addOauthService(user, options);
    }

    throw new Meteor.Error('Bad request');
  }
});
