(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var _ = Package.underscore._;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;

/* Package-scope variables */
var Facebook;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/facebook-oauth/facebook_server.js                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
Facebook = {};
var crypto = Npm.require('crypto');

Facebook.handleAuthFromAccessToken = function handleAuthFromAccessToken(accessToken, expiresAt) {
  // include basic fields from facebook
  // https://developers.facebook.com/docs/facebook-login/permissions/
  var whitelisted = ['id', 'email', 'name', 'first_name', 'last_name',
    'middle_name', 'name_format', 'picture', 'short_name', 'age_range',
    'birthday', 'friends', 'gender', 'hometown', 'link', 'location'];

  var identity = getIdentity(accessToken, whitelisted);

  var serviceData = {
    accessToken: accessToken,
    expiresAt: expiresAt
  };

  var fields = _.pick(identity, whitelisted);
  _.extend(serviceData, fields);

  return {
    serviceData: serviceData,
    options: {profile: {name: identity.name}}
  };
};

OAuth.registerService('facebook', 2, null, function(query) {
  var response = getTokenResponse(query);
  var accessToken = response.accessToken;
  var expiresIn = response.expiresIn;

  return Facebook.handleAuthFromAccessToken(accessToken, (+new Date) + (1000 * expiresIn));
});

// checks whether a string parses as JSON
var isJSON = function (str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

// returns an object containing:
// - accessToken
// - expiresIn: lifetime of token in seconds
var getTokenResponse = function (query) {
  var config = ServiceConfiguration.configurations.findOne({service: 'facebook'});
  if (!config)
    throw new ServiceConfiguration.ConfigError();

  var responseContent;
  try {
    // Request an access token
    responseContent = HTTP.get(
      "https://graph.facebook.com/v3.0/oauth/access_token", {
        params: {
          client_id: config.appId,
          redirect_uri: OAuth._redirectUri('facebook', config),
          client_secret: OAuth.openSecret(config.secret),
          code: query.code
        }
      }).data;
  } catch (err) {
    throw _.extend(new Error("Failed to complete OAuth handshake with Facebook. " + err.message),
                   {response: err.response});
  }

  var fbAccessToken = responseContent.access_token;
  var fbExpires = responseContent.expires_in;

  if (!fbAccessToken) {
    throw new Error("Failed to complete OAuth handshake with facebook " +
                    "-- can't find access token in HTTP response. " + responseContent);
  }
  return {
    accessToken: fbAccessToken,
    expiresIn: fbExpires
  };
};

var getIdentity = function (accessToken, fields) {
  var config = ServiceConfiguration.configurations.findOne({service: 'facebook'});
  if (!config)
    throw new ServiceConfiguration.ConfigError();

  // Generate app secret proof that is a sha256 hash of the app access token, with the app secret as the key
  // https://developers.facebook.com/docs/graph-api/securing-requests#appsecret_proof
  var hmac = crypto.createHmac('sha256', OAuth.openSecret(config.secret));
  hmac.update(accessToken);

  try {
    return HTTP.get("https://graph.facebook.com/v3.0/me", {
      params: {
        access_token: accessToken,
        appsecret_proof: hmac.digest('hex'),
        fields: fields.join(",")
      }
    }).data;
  } catch (err) {
    throw _.extend(new Error("Failed to fetch identity from Facebook. " + err.message),
                   {response: err.response});
  }
};

Facebook.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("facebook-oauth", {
  Facebook: Facebook
});

})();
