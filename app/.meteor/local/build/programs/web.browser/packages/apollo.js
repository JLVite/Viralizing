//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Accounts = Package['accounts-base'].Accounts;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"apollo":{"src":{"main-client.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/apollo/src/main-client.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

module.export({
  createMeteorNetworkInterface: () => createMeteorNetworkInterface,
  meteorClientConfig: () => meteorClientConfig,
  getMeteorLoginToken: () => getMeteorLoginToken
});
let createNetworkInterface, createBatchingNetworkInterface;
module.watch(require("apollo-client"), {
  createNetworkInterface(v) {
    createNetworkInterface = v;
  },

  createBatchingNetworkInterface(v) {
    createBatchingNetworkInterface = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Accounts;
module.watch(require("meteor/accounts-base"), {
  Accounts(v) {
    Accounts = v;
  }

}, 2);
// default network interface configuration object
const defaultNetworkInterfaceConfig = {
  // default graphql server endpoint: ROOT_URL/graphql
  // ex: http://locahost:3000/graphql, or https://www.my-app.com/graphql
  uri: Meteor.absoluteUrl('graphql'),
  // additional fetch options like `credentials` or `headers`
  opts: {},
  // enable the Meteor User Accounts middleware to identify the user with
  // every request thanks to their login token
  useMeteorAccounts: true,
  // use a BatchingNetworkInterface by default instead of a NetworkInterface
  batchingInterface: true,
  // default batch interval
  batchInterval: 10
}; // create a pre-configured network interface

const createMeteorNetworkInterface = function () {
  let customNetworkInterfaceConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // create a new config object based on the default network interface config
  // defined above and the custom network interface config passed to this function
  const config = (0, _objectSpread2.default)({}, defaultNetworkInterfaceConfig, customNetworkInterfaceConfig); // this will be true true if a BatchingNetworkInterface is meant to be used
  // with a correct poll interval

  const useBatchingInterface = config.batchingInterface && typeof config.batchInterval === 'number'; // allow the use of a batching network interface

  const interfaceToUse = useBatchingInterface ? createBatchingNetworkInterface : createNetworkInterface; // http://dev.apollodata.com/core/apollo-client-api.html#NetworkInterfaceOptions

  const interfaceArgument = {
    uri: config.uri,
    opts: config.opts
  }; // http://dev.apollodata.com/core/network.html#BatchingExample

  if (useBatchingInterface) {
    interfaceArgument.batchInterval = config.batchInterval;
  } // configure the (batching?) network interface with the config defined above


  const networkInterface = interfaceToUse(interfaceArgument); // handle the creation of a Meteor User Accounts middleware

  if (config.useMeteorAccounts) {
    try {
      // throw an error if someone tries to specify the login token
      // manually from the client
      if (Meteor.isClient && config.loginToken) {
        throw Error('[Meteor Apollo Integration] The current user is not handled with your GraphQL operations: you are trying to pass a login token to an Apollo Client instance defined client-side. This is only allowed during server-side rendering, please check your implementation.');
      } // dynamic middleware function name depending on the interface used


      const applyMiddlewareFn = useBatchingInterface ? 'applyBatchMiddleware' : 'applyMiddleware'; // add a middleware handling the current user to the network interface

      networkInterface.use([{
        [applyMiddlewareFn](request, next) {
          // get the login token on a per-request basis
          const meteorLoginToken = getMeteorLoginToken(config); // no token, meaning no user connected, just go to next possible middleware

          if (!meteorLoginToken) {
            next();
          } // create the header object if needed.


          if (!request.options.headers) {
            request.options.headers = {};
          } // add the login token to the request headers


          request.options.headers['meteor-login-token'] = meteorLoginToken; // go to next middleware

          next();
        }

      }]);
    } catch (error) {
      // catch the potential error sent by if a login token is manually set client-side
      console.error(error);
    }
  }

  return networkInterface;
};

// default Apollo Client configuration object
const defaultClientConfig = {
  // setup ssr mode if the client is configured server-side (ex: for SSR)
  ssrMode: Meteor.isServer
}; // create a new client config object based on the default Apollo Client config
// defined above and the client config passed to this function

const meteorClientConfig = function () {
  let customClientConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _objectSpread2.default)({
    // default network interface preconfigured, the network interface key is set
    // there to so that `createMeteorNetworkInterface` is executed only when
    // `meteorClientConfig` is called.
    networkInterface: createMeteorNetworkInterface()
  }, defaultClientConfig, customClientConfig);
};

const getMeteorLoginToken = function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // possible cookie login token created by meteorhacks:fast-render
  // and passed to the Apollo Client during server-side rendering
  const {
    loginToken = null
  } = config; // Meteor accounts-base login token stored in local storage,
  // only exists client-side as of Meteor 1.4, will exist with Meteor 1.5

  const localStorageLoginToken = Meteor.isClient && Accounts._storedLoginToken(); // return a meteor login token if existing
  // ex: grabbed from local storage or passed during server-side rendering


  return localStorageLoginToken || loginToken;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/apollo/src/main-client.js");

/* Exports */
Package._define("apollo", exports);

})();
