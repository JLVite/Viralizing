(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Accounts = Package['accounts-base'].Accounts;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"apollo":{"src":{"main-server.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/apollo/src/main-server.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

module.export({
  createApolloServer: () => createApolloServer,
  getUserForContext: () => getUserForContext,
  addCurrentUserToContext: () => addCurrentUserToContext
});
let graphqlExpress, graphiqlExpress;
module.watch(require("graphql-server-express"), {
  graphqlExpress(v) {
    graphqlExpress = v;
  },

  graphiqlExpress(v) {
    graphiqlExpress = v;
  }

}, 0);
let bodyParser;
module.watch(require("body-parser"), {
  default(v) {
    bodyParser = v;
  }

}, 1);
let express;
module.watch(require("express"), {
  default(v) {
    express = v;
  }

}, 2);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 3);
let WebApp;
module.watch(require("meteor/webapp"), {
  WebApp(v) {
    WebApp = v;
  }

}, 4);
let Accounts;
module.watch(require("meteor/accounts-base"), {
  Accounts(v) {
    Accounts = v;
  }

}, 5);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 6);
module.watch(require("./main-client"), {
  createMeteorNetworkInterface(v) {
    exports.createMeteorNetworkInterface = v;
  },

  meteorClientConfig(v) {
    exports.meteorClientConfig = v;
  }

}, 7);
// default server configuration object
const defaultServerConfig = {
  // graphql endpoint
  path: '/graphql',
  // additional Express server configuration (enable CORS there for instance)
  configServer: graphQLServer => {},
  // enable GraphiQL only in development mode
  graphiql: Meteor.isDevelopment,
  // GraphiQL endpoint
  graphiqlPath: '/graphiql',
  // GraphiQL options (default: log the current user in your request)
  graphiqlOptions: {
    passHeader: "'meteor-login-token': localStorage['Meteor.loginToken']"
  }
}; // default graphql options to enhance the graphQLExpress server

const defaultGraphQLOptions = {
  // ensure that a context object is defined for the resolvers
  context: {},
  // error formatting
  formatError: e => ({
    message: e.message,
    locations: e.locations,
    path: e.path
  }),
  // additional debug logging if execution errors occur in dev mode
  debug: Meteor.isDevelopment
};

const createApolloServer = (customOptions = {}, customConfig = {}) => {
  // create a new server config object based on the default server config
  // defined above and the custom server config passed to this function
  const config = (0, _objectSpread2.default)({}, defaultServerConfig, customConfig);

  if (customConfig.graphiqlOptions) {
    config.graphiqlOptions = (0, _objectSpread2.default)({}, defaultServerConfig.graphiqlOptions, customConfig.graphiqlOptions);
  } // the Meteor GraphQL server is an Express server


  const graphQLServer = express(); // enhance the GraphQL server with possible express middlewares

  config.configServer(graphQLServer); // GraphQL endpoint, enhanced with JSON body parser

  graphQLServer.use(config.path, bodyParser.json(), graphqlExpress(req => Promise.asyncApply(() => {
    try {
      // graphqlExpress can accept a function returning the option object
      const customOptionsObject = typeof customOptions === 'function' ? customOptions(req) : customOptions; // create a new apollo options object based on the default apollo options
      // defined above and the custom apollo options passed to this function

      const options = (0, _objectSpread2.default)({}, defaultGraphQLOptions, customOptionsObject); // get the login token from the headers request, given by the Meteor's
      // network interface middleware if enabled

      const loginToken = req.headers['meteor-login-token']; // get the current user & the user id for the context

      const userContext = Promise.await(getUserForContext(loginToken)); // context can accept a function returning the context object

      const context = typeof options.context === 'function' ? options.context(userContext) : (0, _objectSpread2.default)({}, options.context, userContext); // return the configured options to be used by the graphql server

      return (0, _objectSpread2.default)({}, options, {
        context
      });
    } catch (error) {
      // something went bad when configuring the graphql server, we do not
      // swallow the error and display it in the server-side logs
      console.error('[Meteor Apollo Integration] Something bad happened when handling a request on the GraphQL server. Your GraphQL server is not working as expected:', error); // return the default graphql options anyway

      return defaultGraphQLOptions;
    }
  }))); // Start GraphiQL if enabled

  if (config.graphiql) {
    // GraphiQL endpoint
    graphQLServer.use(config.graphiqlPath, graphiqlExpress((0, _objectSpread2.default)({}, config.graphiqlOptions, {
      // endpoint of the graphql server where to send requests
      endpointURL: config.path
    })));
  } // this binds the specified paths to the Express server running Apollo + GraphiQL


  WebApp.connectHandlers.use(graphQLServer);
};

const getUserForContext = loginToken => Promise.asyncApply(() => {
  // there is a possible current user connected!
  if (loginToken) {
    // throw an error if the token is not a string
    check(loginToken, String); // the hashed token is the key to find the possible current user in the db

    const hashedToken = Accounts._hashLoginToken(loginToken); // get the possible current user from the database
    // note: no need of a fiber aware findOne + a fiber aware call break tests
    // runned with practicalmeteor:mocha if eslint is enabled


    const currentUser = Promise.await(Meteor.users.rawCollection().findOne({
      'services.resume.loginTokens.hashedToken': hashedToken
    })); // the current user exists

    if (currentUser) {
      // find the right login token corresponding, the current user may have
      // several sessions logged on different browsers / computers
      const tokenInformation = currentUser.services.resume.loginTokens.find(tokenInfo => tokenInfo.hashedToken === hashedToken); // get an exploitable token expiration date

      const expiresAt = Accounts._tokenExpiration(tokenInformation.when); // true if the token is expired


      const isExpired = expiresAt < new Date(); // if the token is still valid, give access to the current user
      // information in the resolvers context

      if (!isExpired) {
        // return a new context object with the current user & her id
        return {
          user: currentUser,
          userId: currentUser._id
        };
      }
    }
  }

  return {};
});

const addCurrentUserToContext = (context, loginToken) => Promise.asyncApply(() => {
  const userContext = Promise.await(getUserForContext(loginToken));
  return (0, _objectSpread2.default)({}, context, userContext);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main-client.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/apollo/src/main-client.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

const createMeteorNetworkInterface = (customNetworkInterfaceConfig = {}) => {
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

const meteorClientConfig = (customClientConfig = {}) => (0, _objectSpread2.default)({
  // default network interface preconfigured, the network interface key is set
  // there to so that `createMeteorNetworkInterface` is executed only when
  // `meteorClientConfig` is called.
  networkInterface: createMeteorNetworkInterface()
}, defaultClientConfig, customClientConfig);

const getMeteorLoginToken = (config = {}) => {
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/apollo/src/main-server.js");

/* Exports */
Package._define("apollo", exports);

})();

//# sourceURL=meteor://💻app/packages/apollo.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYXBvbGxvL3NyYy9tYWluLXNlcnZlci5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYXBvbGxvL3NyYy9tYWluLWNsaWVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJjcmVhdGVBcG9sbG9TZXJ2ZXIiLCJnZXRVc2VyRm9yQ29udGV4dCIsImFkZEN1cnJlbnRVc2VyVG9Db250ZXh0IiwiZ3JhcGhxbEV4cHJlc3MiLCJncmFwaGlxbEV4cHJlc3MiLCJ3YXRjaCIsInJlcXVpcmUiLCJ2IiwiYm9keVBhcnNlciIsImRlZmF1bHQiLCJleHByZXNzIiwiTWV0ZW9yIiwiV2ViQXBwIiwiQWNjb3VudHMiLCJjaGVjayIsImNyZWF0ZU1ldGVvck5ldHdvcmtJbnRlcmZhY2UiLCJleHBvcnRzIiwibWV0ZW9yQ2xpZW50Q29uZmlnIiwiZGVmYXVsdFNlcnZlckNvbmZpZyIsInBhdGgiLCJjb25maWdTZXJ2ZXIiLCJncmFwaFFMU2VydmVyIiwiZ3JhcGhpcWwiLCJpc0RldmVsb3BtZW50IiwiZ3JhcGhpcWxQYXRoIiwiZ3JhcGhpcWxPcHRpb25zIiwicGFzc0hlYWRlciIsImRlZmF1bHRHcmFwaFFMT3B0aW9ucyIsImNvbnRleHQiLCJmb3JtYXRFcnJvciIsImUiLCJtZXNzYWdlIiwibG9jYXRpb25zIiwiZGVidWciLCJjdXN0b21PcHRpb25zIiwiY3VzdG9tQ29uZmlnIiwiY29uZmlnIiwidXNlIiwianNvbiIsInJlcSIsImN1c3RvbU9wdGlvbnNPYmplY3QiLCJvcHRpb25zIiwibG9naW5Ub2tlbiIsImhlYWRlcnMiLCJ1c2VyQ29udGV4dCIsImVycm9yIiwiY29uc29sZSIsImVuZHBvaW50VVJMIiwiY29ubmVjdEhhbmRsZXJzIiwiU3RyaW5nIiwiaGFzaGVkVG9rZW4iLCJfaGFzaExvZ2luVG9rZW4iLCJjdXJyZW50VXNlciIsInVzZXJzIiwicmF3Q29sbGVjdGlvbiIsImZpbmRPbmUiLCJ0b2tlbkluZm9ybWF0aW9uIiwic2VydmljZXMiLCJyZXN1bWUiLCJsb2dpblRva2VucyIsImZpbmQiLCJ0b2tlbkluZm8iLCJleHBpcmVzQXQiLCJfdG9rZW5FeHBpcmF0aW9uIiwid2hlbiIsImlzRXhwaXJlZCIsIkRhdGUiLCJ1c2VyIiwidXNlcklkIiwiX2lkIiwiZ2V0TWV0ZW9yTG9naW5Ub2tlbiIsImNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UiLCJjcmVhdGVCYXRjaGluZ05ldHdvcmtJbnRlcmZhY2UiLCJkZWZhdWx0TmV0d29ya0ludGVyZmFjZUNvbmZpZyIsInVyaSIsImFic29sdXRlVXJsIiwib3B0cyIsInVzZU1ldGVvckFjY291bnRzIiwiYmF0Y2hpbmdJbnRlcmZhY2UiLCJiYXRjaEludGVydmFsIiwiY3VzdG9tTmV0d29ya0ludGVyZmFjZUNvbmZpZyIsInVzZUJhdGNoaW5nSW50ZXJmYWNlIiwiaW50ZXJmYWNlVG9Vc2UiLCJpbnRlcmZhY2VBcmd1bWVudCIsIm5ldHdvcmtJbnRlcmZhY2UiLCJpc0NsaWVudCIsIkVycm9yIiwiYXBwbHlNaWRkbGV3YXJlRm4iLCJyZXF1ZXN0IiwibmV4dCIsIm1ldGVvckxvZ2luVG9rZW4iLCJkZWZhdWx0Q2xpZW50Q29uZmlnIiwic3NyTW9kZSIsImlzU2VydmVyIiwiY3VzdG9tQ2xpZW50Q29uZmlnIiwibG9jYWxTdG9yYWdlTG9naW5Ub2tlbiIsIl9zdG9yZWRMb2dpblRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBT0MsTUFBUCxDQUFjO0FBQUNDLHNCQUFtQixNQUFJQSxrQkFBeEI7QUFBMkNDLHFCQUFrQixNQUFJQSxpQkFBakU7QUFBbUZDLDJCQUF3QixNQUFJQTtBQUEvRyxDQUFkO0FBQXVKLElBQUlDLGNBQUosRUFBbUJDLGVBQW5CO0FBQW1DTixPQUFPTyxLQUFQLENBQWFDLFFBQVEsd0JBQVIsQ0FBYixFQUErQztBQUFDSCxpQkFBZUksQ0FBZixFQUFpQjtBQUFDSixxQkFBZUksQ0FBZjtB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QUFDRDs7QUFwQkgsT0FEbUIsQ0FBckI7QUF3QkQsS0FyQ0QsQ0FxQ0UsT0FBTzVDLEtBQVAsRUFBYztBQUNkO0FBQ0FDLGNBQVFELEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3VDLGdCQUFQO0FBQ0QsQ0E3RU07O0FBK0VQO0FBQ0EsTUFBTU8sc0JBQXNCO0FBQzFCO0FBQ0FDLFdBQVNqRixPQUFPa0Y7QUFGVSxDQUE1QixDLENBS0E7QUFDQTs7QUFDTyxNQUFNNUUscUJBQXFCLENBQUM2RSxxQkFBcUIsRUFBdEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0FWLG9CQUFrQnJFO0FBSmMsR0FLN0I0RSxtQkFMNkIsRUFNN0JHLGtCQU42QixDQUEzQjs7QUFVQSxNQUFNeEIsc0JBQXNCLENBQUNsQyxTQUFTLEVBQVYsS0FBaUI7QUFDbEQ7QUFDQTtBQUNBLFFBQU07QUFBRU0saUJBQWE7QUFBZixNQUF3Qk4sTUFBOUIsQ0FIa0QsQ0FLbEQ7QUFDQTs7QUFDQSxRQUFNMkQseUJBQXlCcEYsT0FBTzBFLFFBQVAsSUFBbUJ4RSxTQUFTbUYsaUJBQVQsRUFBbEQsQ0FQa0QsQ0FTbEQ7QUFDQTs7O0FBQ0EsU0FBT0QsMEJBQTBCckQsVUFBakM7QUFDRCxDQVpNLEMiLCJmaWxlIjoiL3BhY2thZ2VzL2Fwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWxFeHByZXNzLCBncmFwaGlxbEV4cHJlc3MgfSBmcm9tICdncmFwaHFsLXNlcnZlci1leHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFdlYkFwcCB9IGZyb20gJ21ldGVvci93ZWJhcHAnO1xuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5cbi8vIGltcG9ydCB0aGUgY29uZmlndXJhdGlvbiBmdW5jdGlvbnMgZnJvbSB0aGUgY2xpZW50IHNvIHRoZXkgY2FuIGJlIHVzZWRcbi8vIGR1cmluZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgZm9yIGluc3RhbmNlXG5leHBvcnQgeyBjcmVhdGVNZXRlb3JOZXR3b3JrSW50ZXJmYWNlLCBtZXRlb3JDbGllbnRDb25maWcgfSBmcm9tICcuL21haW4tY2xpZW50JztcblxuLy8gZGVmYXVsdCBzZXJ2ZXIgY29uZmlndXJhdGlvbiBvYmplY3RcbmNvbnN0IGRlZmF1bHRTZXJ2ZXJDb25maWcgPSB7XG4gIC8vIGdyYXBocWwgZW5kcG9pbnRcbiAgcGF0aDogJy9ncmFwaHFsJyxcbiAgLy8gYWRkaXRpb25hbCBFeHByZXNzIHNlcnZlciBjb25maWd1cmF0aW9uIChlbmFibGUgQ09SUyB0aGVyZSBmb3IgaW5zdGFuY2UpXG4gIGNvbmZpZ1NlcnZlcjogZ3JhcGhRTFNlcnZlciA9PiB7fSxcbiAgLy8gZW5hYmxlIEdyYXBoaVFMIG9ubHkgaW4gZGV2ZWxvcG1lbnQgbW9kZVxuICBncmFwaGlxbDogTWV0ZW9yLmlzRGV2ZWxvcG1lbnQsXG4gIC8vIEdyYXBoaVFMIGVuZHBvaW50XG4gIGdyYXBoaXFsUGF0aDogJy9ncmFwaGlxbCcsXG4gIC8vIEdyYXBoaVFMIG9wdGlvbnMgKGRlZmF1bHQ6IGxvZyB0aGUgY3VycmVudCB1c2VyIGluIHlvdXIgcmVxdWVzdClcbiAgZ3JhcGhpcWxPcHRpb25zOiB7XG4gICAgcGFzc0hlYWRlcjogXCInbWV0ZW9yLWxvZ2luLXRva2VuJzogbG9jYWxTdG9yYWdlWydNZXRlb3IubG9naW5Ub2tlbiddXCIsXG4gIH0sXG59O1xuXG4vLyBkZWZhdWx0IGdyYXBocWwgb3B0aW9ucyB0byBlbmhhbmNlIHRoZSBncmFwaFFMRXhwcmVzcyBzZXJ2ZXJcbmNvbnN0IGRlZmF1bHRHcmFwaFFMT3B0aW9ucyA9IHtcbiAgLy8gZW5zdXJlIHRoYXQgYSBjb250ZXh0IG9iamVjdCBpcyBkZWZpbmVkIGZvciB0aGUgcmVzb2x2ZXJzXG4gIGNvbnRleHQ6IHt9LFxuICAvLyBlcnJvciBmb3JtYXR0aW5nXG4gIGZvcm1hdEVycm9yOiBlID0+ICh7XG4gICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgIGxvY2F0aW9uczogZS5sb2NhdGlvbnMsXG4gICAgcGF0aDogZS5wYXRoLFxuICB9KSxcbiAgLy8gYWRkaXRpb25hbCBkZWJ1ZyBsb2dnaW5nIGlmIGV4ZWN1dGlvbiBlcnJvcnMgb2NjdXIgaW4gZGV2IG1vZGVcbiAgZGVidWc6IE1ldGVvci5pc0RldmVsb3BtZW50LFxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwb2xsb1NlcnZlciA9IChjdXN0b21PcHRpb25zID0ge30sIGN1c3RvbUNvbmZpZyA9IHt9KSA9PiB7XG4gIC8vIGNyZWF0ZSBhIG5ldyBzZXJ2ZXIgY29uZmlnIG9iamVjdCBiYXNlZCBvbiB0aGUgZGVmYXVsdCBzZXJ2ZXIgY29uZmlnXG4gIC8vIGRlZmluZWQgYWJvdmUgYW5kIHRoZSBjdXN0b20gc2VydmVyIGNvbmZpZyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4uZGVmYXVsdFNlcnZlckNvbmZpZyxcbiAgICAuLi5jdXN0b21Db25maWcsXG4gIH07XG5cbiAgaWYgKGN1c3RvbUNvbmZpZy5ncmFwaGlxbE9wdGlvbnMpIHtcbiAgICBjb25maWcuZ3JhcGhpcWxPcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdFNlcnZlckNvbmZpZy5ncmFwaGlxbE9wdGlvbnMsXG4gICAgICAuLi5jdXN0b21Db25maWcuZ3JhcGhpcWxPcHRpb25zLFxuICAgIH07XG4gIH1cblxuICAvLyB0aGUgTWV0ZW9yIEdyYXBoUUwgc2VydmVyIGlzIGFuIEV4cHJlc3Mgc2VydmVyXG4gIGNvbnN0IGdyYXBoUUxTZXJ2ZXIgPSBleHByZXNzKCk7XG5cbiAgLy8gZW5oYW5jZSB0aGUgR3JhcGhRTCBzZXJ2ZXIgd2l0aCBwb3NzaWJsZSBleHByZXNzIG1pZGRsZXdhcmVzXG4gIGNvbmZpZy5jb25maWdTZXJ2ZXIoZ3JhcGhRTFNlcnZlcik7XG5cbiAgLy8gR3JhcGhRTCBlbmRwb2ludCwgZW5oYW5jZWQgd2l0aCBKU09OIGJvZHkgcGFyc2VyXG4gIGdyYXBoUUxTZXJ2ZXIudXNlKFxuICAgIGNvbmZpZy5wYXRoLFxuICAgIGJvZHlQYXJzZXIuanNvbigpLFxuICAgIGdyYXBocWxFeHByZXNzKGFzeW5jIHJlcSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBncmFwaHFsRXhwcmVzcyBjYW4gYWNjZXB0IGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBvcHRpb24gb2JqZWN0XG4gICAgICAgIGNvbnN0IGN1c3RvbU9wdGlvbnNPYmplY3QgPSB0eXBlb2YgY3VzdG9tT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gY3VzdG9tT3B0aW9ucyhyZXEpXG4gICAgICAgICAgOiBjdXN0b21PcHRpb25zO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBhcG9sbG8gb3B0aW9ucyBvYmplY3QgYmFzZWQgb24gdGhlIGRlZmF1bHQgYXBvbGxvIG9wdGlvbnNcbiAgICAgICAgLy8gZGVmaW5lZCBhYm92ZSBhbmQgdGhlIGN1c3RvbSBhcG9sbG8gb3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIC4uLmRlZmF1bHRHcmFwaFFMT3B0aW9ucyxcbiAgICAgICAgICAuLi5jdXN0b21PcHRpb25zT2JqZWN0LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGdldCB0aGUgbG9naW4gdG9rZW4gZnJvbSB0aGUgaGVhZGVycyByZXF1ZXN0LCBnaXZlbiBieSB0aGUgTWV0ZW9yJ3NcbiAgICAgICAgLy8gbmV0d29yayBpbnRlcmZhY2UgbWlkZGxld2FyZSBpZiBlbmFibGVkXG4gICAgICAgIGNvbnN0IGxvZ2luVG9rZW4gPSByZXEuaGVhZGVyc1snbWV0ZW9yLWxvZ2luLXRva2VuJ107XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHVzZXIgJiB0aGUgdXNlciBpZCBmb3IgdGhlIGNvbnRleHRcbiAgICAgICAgY29uc3QgdXNlckNvbnRleHQgPSBhd2FpdCBnZXRVc2VyRm9yQ29udGV4dChsb2dpblRva2VuKTtcblxuICAgICAgICAvLyBjb250ZXh0IGNhbiBhY2NlcHQgYSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIGNvbnRleHQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBvcHRpb25zLmNvbnRleHQodXNlckNvbnRleHQpXG4gICAgICAgICAgOiB7IC4uLm9wdGlvbnMuY29udGV4dCwgLi4udXNlckNvbnRleHQgfTtcblxuICAgICAgICAvLyByZXR1cm4gdGhlIGNvbmZpZ3VyZWQgb3B0aW9ucyB0byBiZSB1c2VkIGJ5IHRoZSBncmFwaHFsIHNlcnZlclxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IGJhZCB3aGVuIGNvbmZpZ3VyaW5nIHRoZSBncmFwaHFsIHNlcnZlciwgd2UgZG8gbm90XG4gICAgICAgIC8vIHN3YWxsb3cgdGhlIGVycm9yIGFuZCBkaXNwbGF5IGl0IGluIHRoZSBzZXJ2ZXItc2lkZSBsb2dzXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1tNZXRlb3IgQXBvbGxvIEludGVncmF0aW9uXSBTb21ldGhpbmcgYmFkIGhhcHBlbmVkIHdoZW4gaGFuZGxpbmcgYSByZXF1ZXN0IG9uIHRoZSBHcmFwaFFMIHNlcnZlci4gWW91ciBHcmFwaFFMIHNlcnZlciBpcyBub3Qgd29ya2luZyBhcyBleHBlY3RlZDonLFxuICAgICAgICAgIGVycm9yXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRoZSBkZWZhdWx0IGdyYXBocWwgb3B0aW9ucyBhbnl3YXlcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRHcmFwaFFMT3B0aW9ucztcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIC8vIFN0YXJ0IEdyYXBoaVFMIGlmIGVuYWJsZWRcbiAgaWYgKGNvbmZpZy5ncmFwaGlxbCkge1xuICAgIC8vIEdyYXBoaVFMIGVuZHBvaW50XG4gICAgZ3JhcGhRTFNlcnZlci51c2UoXG4gICAgICBjb25maWcuZ3JhcGhpcWxQYXRoLFxuICAgICAgZ3JhcGhpcWxFeHByZXNzKHtcbiAgICAgICAgLy8gR3JhcGhpUUwgb3B0aW9uc1xuICAgICAgICAuLi5jb25maWcuZ3JhcGhpcWxPcHRpb25zLFxuICAgICAgICAvLyBlbmRwb2ludCBvZiB0aGUgZ3JhcGhxbCBzZXJ2ZXIgd2hlcmUgdG8gc2VuZCByZXF1ZXN0c1xuICAgICAgICBlbmRwb2ludFVSTDogY29uZmlnLnBhdGgsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgLy8gdGhpcyBiaW5kcyB0aGUgc3BlY2lmaWVkIHBhdGhzIHRvIHRoZSBFeHByZXNzIHNlcnZlciBydW5uaW5nIEFwb2xsbyArIEdyYXBoaVFMXG4gIFdlYkFwcC5jb25uZWN0SGFuZGxlcnMudXNlKGdyYXBoUUxTZXJ2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGb3JDb250ZXh0ID0gYXN5bmMgbG9naW5Ub2tlbiA9PiB7XG4gIC8vIHRoZXJlIGlzIGEgcG9zc2libGUgY3VycmVudCB1c2VyIGNvbm5lY3RlZCFcbiAgaWYgKGxvZ2luVG9rZW4pIHtcbiAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiB0aGUgdG9rZW4gaXMgbm90IGEgc3RyaW5nXG4gICAgY2hlY2sobG9naW5Ub2tlbiwgU3RyaW5nKTtcblxuICAgIC8vIHRoZSBoYXNoZWQgdG9rZW4gaXMgdGhlIGtleSB0byBmaW5kIHRoZSBwb3NzaWJsZSBjdXJyZW50IHVzZXIgaW4gdGhlIGRiXG4gICAgY29uc3QgaGFzaGVkVG9rZW4gPSBBY2NvdW50cy5faGFzaExvZ2luVG9rZW4obG9naW5Ub2tlbik7XG5cbiAgICAvLyBnZXQgdGhlIHBvc3NpYmxlIGN1cnJlbnQgdXNlciBmcm9tIHRoZSBkYXRhYmFzZVxuICAgIC8vIG5vdGU6IG5vIG5lZWQgb2YgYSBmaWJlciBhd2FyZSBmaW5kT25lICsgYSBmaWJlciBhd2FyZSBjYWxsIGJyZWFrIHRlc3RzXG4gICAgLy8gcnVubmVkIHdpdGggcHJhY3RpY2FsbWV0ZW9yOm1vY2hhIGlmIGVzbGludCBpcyBlbmFibGVkXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBNZXRlb3IudXNlcnMucmF3Q29sbGVjdGlvbigpLmZpbmRPbmUoe1xuICAgICAgJ3NlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucy5oYXNoZWRUb2tlbic6IGhhc2hlZFRva2VuLFxuICAgIH0pO1xuXG4gICAgLy8gdGhlIGN1cnJlbnQgdXNlciBleGlzdHNcbiAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgIC8vIGZpbmQgdGhlIHJpZ2h0IGxvZ2luIHRva2VuIGNvcnJlc3BvbmRpbmcsIHRoZSBjdXJyZW50IHVzZXIgbWF5IGhhdmVcbiAgICAgIC8vIHNldmVyYWwgc2Vzc2lvbnMgbG9nZ2VkIG9uIGRpZmZlcmVudCBicm93c2VycyAvIGNvbXB1dGVyc1xuICAgICAgY29uc3QgdG9rZW5JbmZvcm1hdGlvbiA9IGN1cnJlbnRVc2VyLnNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucy5maW5kKFxuICAgICAgICB0b2tlbkluZm8gPT4gdG9rZW5JbmZvLmhhc2hlZFRva2VuID09PSBoYXNoZWRUb2tlblxuICAgICAgKTtcblxuICAgICAgLy8gZ2V0IGFuIGV4cGxvaXRhYmxlIHRva2VuIGV4cGlyYXRpb24gZGF0ZVxuICAgICAgY29uc3QgZXhwaXJlc0F0ID0gQWNjb3VudHMuX3Rva2VuRXhwaXJhdGlvbih0b2tlbkluZm9ybWF0aW9uLndoZW4pO1xuXG4gICAgICAvLyB0cnVlIGlmIHRoZSB0b2tlbiBpcyBleHBpcmVkXG4gICAgICBjb25zdCBpc0V4cGlyZWQgPSBleHBpcmVzQXQgPCBuZXcgRGF0ZSgpO1xuXG4gICAgICAvLyBpZiB0aGUgdG9rZW4gaXMgc3RpbGwgdmFsaWQsIGdpdmUgYWNjZXNzIHRvIHRoZSBjdXJyZW50IHVzZXJcbiAgICAgIC8vIGluZm9ybWF0aW9uIGluIHRoZSByZXNvbHZlcnMgY29udGV4dFxuICAgICAgaWYgKCFpc0V4cGlyZWQpIHtcbiAgICAgICAgLy8gcmV0dXJuIGEgbmV3IGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgdXNlciAmIGhlciBpZFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyLFxuICAgICAgICAgIHVzZXJJZDogY3VycmVudFVzZXIuX2lkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7fTtcbn07XG5cbi8vIHRha2UgdGhlIGV4aXN0aW5nIGNvbnRleHQgYW5kIHJldHVybiBhIG5ldyBleHRlbmRlZCBjb250ZXh0IHdpdGggdGhlIGN1cnJlbnRcbi8vIHVzZXIgaWYgcmVsZXZhbnQgKGkuZS4gdmFsaWQgbG9naW4gdG9rZW4pXG5leHBvcnQgY29uc3QgYWRkQ3VycmVudFVzZXJUb0NvbnRleHQgPSBhc3luYyAoY29udGV4dCwgbG9naW5Ub2tlbikgPT4ge1xuICBjb25zdCB1c2VyQ29udGV4dCA9IGF3YWl0IGdldFVzZXJGb3JDb250ZXh0KGxvZ2luVG9rZW4pO1xuICByZXR1cm4ge1xuICAgIC4uLmNvbnRleHQsXG4gICAgLi4udXNlckNvbnRleHQsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlTmV0d29ya0ludGVyZmFjZSwgY3JlYXRlQmF0Y2hpbmdOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5cbmltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5cbi8vIGRlZmF1bHQgbmV0d29yayBpbnRlcmZhY2UgY29uZmlndXJhdGlvbiBvYmplY3RcbmNvbnN0IGRlZmF1bHROZXR3b3JrSW50ZXJmYWNlQ29uZmlnID0ge1xuICAvLyBkZWZhdWx0IGdyYXBocWwgc2VydmVyIGVuZHBvaW50OiBST09UX1VSTC9ncmFwaHFsXG4gIC8vIGV4OiBodHRwOi8vbG9jYWhvc3Q6MzAwMC9ncmFwaHFsLCBvciBodHRwczovL3d3dy5teS1hcHAuY29tL2dyYXBocWxcbiAgdXJpOiBNZXRlb3IuYWJzb2x1dGVVcmwoJ2dyYXBocWwnKSxcbiAgLy8gYWRkaXRpb25hbCBmZXRjaCBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgb3B0czoge30sXG4gIC8vIGVuYWJsZSB0aGUgTWV0ZW9yIFVzZXIgQWNjb3VudHMgbWlkZGxld2FyZSB0byBpZGVudGlmeSB0aGUgdXNlciB3aXRoXG4gIC8vIGV2ZXJ5IHJlcXVlc3QgdGhhbmtzIHRvIHRoZWlyIGxvZ2luIHRva2VuXG4gIHVzZU1ldGVvckFjY291bnRzOiB0cnVlLFxuICAvLyB1c2UgYSBCYXRjaGluZ05ldHdvcmtJbnRlcmZhY2UgYnkgZGVmYXVsdCBpbnN0ZWFkIG9mIGEgTmV0d29ya0ludGVyZmFjZVxuICBiYXRjaGluZ0ludGVyZmFjZTogdHJ1ZSxcbiAgLy8gZGVmYXVsdCBiYXRjaCBpbnRlcnZhbFxuICBiYXRjaEludGVydmFsOiAxMCxcbn07XG5cbi8vIGNyZWF0ZSBhIHByZS1jb25maWd1cmVkIG5ldHdvcmsgaW50ZXJmYWNlXG5leHBvcnQgY29uc3QgY3JlYXRlTWV0ZW9yTmV0d29ya0ludGVyZmFjZSA9IChjdXN0b21OZXR3b3JrSW50ZXJmYWNlQ29uZmlnID0ge30pID0+IHtcbiAgLy8gY3JlYXRlIGEgbmV3IGNvbmZpZyBvYmplY3QgYmFzZWQgb24gdGhlIGRlZmF1bHQgbmV0d29yayBpbnRlcmZhY2UgY29uZmlnXG4gIC8vIGRlZmluZWQgYWJvdmUgYW5kIHRoZSBjdXN0b20gbmV0d29yayBpbnRlcmZhY2UgY29uZmlnIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5kZWZhdWx0TmV0d29ya0ludGVyZmFjZUNvbmZpZyxcbiAgICAuLi5jdXN0b21OZXR3b3JrSW50ZXJmYWNlQ29uZmlnLFxuICB9O1xuXG4gIC8vIHRoaXMgd2lsbCBiZSB0cnVlIHRydWUgaWYgYSBCYXRjaGluZ05ldHdvcmtJbnRlcmZhY2UgaXMgbWVhbnQgdG8gYmUgdXNlZFxuICAvLyB3aXRoIGEgY29ycmVjdCBwb2xsIGludGVydmFsXG4gIGNvbnN0IHVzZUJhdGNoaW5nSW50ZXJmYWNlID0gY29uZmlnLmJhdGNoaW5nSW50ZXJmYWNlICYmIHR5cGVvZiBjb25maWcuYmF0Y2hJbnRlcnZhbCA9PT0gJ251bWJlcic7XG5cbiAgLy8gYWxsb3cgdGhlIHVzZSBvZiBhIGJhdGNoaW5nIG5ldHdvcmsgaW50ZXJmYWNlXG4gIGNvbnN0IGludGVyZmFjZVRvVXNlID0gdXNlQmF0Y2hpbmdJbnRlcmZhY2VcbiAgICA/IGNyZWF0ZUJhdGNoaW5nTmV0d29ya0ludGVyZmFjZVxuICAgIDogY3JlYXRlTmV0d29ya0ludGVyZmFjZTtcblxuICAvLyBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL2NvcmUvYXBvbGxvLWNsaWVudC1hcGkuaHRtbCNOZXR3b3JrSW50ZXJmYWNlT3B0aW9uc1xuICBjb25zdCBpbnRlcmZhY2VBcmd1bWVudCA9IHtcbiAgICB1cmk6IGNvbmZpZy51cmksXG4gICAgb3B0czogY29uZmlnLm9wdHMsXG4gIH07XG5cbiAgLy8gaHR0cDovL2Rldi5hcG9sbG9kYXRhLmNvbS9jb3JlL25ldHdvcmsuaHRtbCNCYXRjaGluZ0V4YW1wbGVcbiAgaWYgKHVzZUJhdGNoaW5nSW50ZXJmYWNlKSB7XG4gICAgaW50ZXJmYWNlQXJndW1lbnQuYmF0Y2hJbnRlcnZhbCA9IGNvbmZpZy5iYXRjaEludGVydmFsO1xuICB9XG5cbiAgLy8gY29uZmlndXJlIHRoZSAoYmF0Y2hpbmc/KSBuZXR3b3JrIGludGVyZmFjZSB3aXRoIHRoZSBjb25maWcgZGVmaW5lZCBhYm92ZVxuICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gaW50ZXJmYWNlVG9Vc2UoaW50ZXJmYWNlQXJndW1lbnQpO1xuXG4gIC8vIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgYSBNZXRlb3IgVXNlciBBY2NvdW50cyBtaWRkbGV3YXJlXG4gIGlmIChjb25maWcudXNlTWV0ZW9yQWNjb3VudHMpIHtcbiAgICB0cnkge1xuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgaWYgc29tZW9uZSB0cmllcyB0byBzcGVjaWZ5IHRoZSBsb2dpbiB0b2tlblxuICAgICAgLy8gbWFudWFsbHkgZnJvbSB0aGUgY2xpZW50XG4gICAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50ICYmIGNvbmZpZy5sb2dpblRva2VuKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICdbTWV0ZW9yIEFwb2xsbyBJbnRlZ3JhdGlvbl0gVGhlIGN1cnJlbnQgdXNlciBpcyBub3QgaGFuZGxlZCB3aXRoIHlvdXIgR3JhcGhRTCBvcGVyYXRpb25zOiB5b3UgYXJlIHRyeWluZyB0byBwYXNzIGEgbG9naW4gdG9rZW4gdG8gYW4gQXBvbGxvIENsaWVudCBpbnN0YW5jZSBkZWZpbmVkIGNsaWVudC1zaWRlLiBUaGlzIGlzIG9ubHkgYWxsb3dlZCBkdXJpbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLCBwbGVhc2UgY2hlY2sgeW91ciBpbXBsZW1lbnRhdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIGR5bmFtaWMgbWlkZGxld2FyZSBmdW5jdGlvbiBuYW1lIGRlcGVuZGluZyBvbiB0aGUgaW50ZXJmYWNlIHVzZWRcbiAgICAgIGNvbnN0IGFwcGx5TWlkZGxld2FyZUZuID0gdXNlQmF0Y2hpbmdJbnRlcmZhY2UgPyAnYXBwbHlCYXRjaE1pZGRsZXdhcmUnIDogJ2FwcGx5TWlkZGxld2FyZSc7XG5cbiAgICAgIC8vIGFkZCBhIG1pZGRsZXdhcmUgaGFuZGxpbmcgdGhlIGN1cnJlbnQgdXNlciB0byB0aGUgbmV0d29yayBpbnRlcmZhY2VcbiAgICAgIG5ldHdvcmtJbnRlcmZhY2UudXNlKFtcbiAgICAgICAge1xuICAgICAgICAgIFthcHBseU1pZGRsZXdhcmVGbl0ocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBsb2dpbiB0b2tlbiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzXG4gICAgICAgICAgICBjb25zdCBtZXRlb3JMb2dpblRva2VuID0gZ2V0TWV0ZW9yTG9naW5Ub2tlbihjb25maWcpO1xuXG4gICAgICAgICAgICAvLyBubyB0b2tlbiwgbWVhbmluZyBubyB1c2VyIGNvbm5lY3RlZCwganVzdCBnbyB0byBuZXh0IHBvc3NpYmxlIG1pZGRsZXdhcmVcbiAgICAgICAgICAgIGlmICghbWV0ZW9yTG9naW5Ub2tlbikge1xuICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgaGVhZGVyIG9iamVjdCBpZiBuZWVkZWQuXG4gICAgICAgICAgICBpZiAoIXJlcXVlc3Qub3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgIHJlcXVlc3Qub3B0aW9ucy5oZWFkZXJzID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbG9naW4gdG9rZW4gdG8gdGhlIHJlcXVlc3QgaGVhZGVyc1xuICAgICAgICAgICAgcmVxdWVzdC5vcHRpb25zLmhlYWRlcnNbJ21ldGVvci1sb2dpbi10b2tlbiddID0gbWV0ZW9yTG9naW5Ub2tlbjtcblxuICAgICAgICAgICAgLy8gZ28gdG8gbmV4dCBtaWRkbGV3YXJlXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjYXRjaCB0aGUgcG90ZW50aWFsIGVycm9yIHNlbnQgYnkgaWYgYSBsb2dpbiB0b2tlbiBpcyBtYW51YWxseSBzZXQgY2xpZW50LXNpZGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXR3b3JrSW50ZXJmYWNlO1xufTtcblxuLy8gZGVmYXVsdCBBcG9sbG8gQ2xpZW50IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5jb25zdCBkZWZhdWx0Q2xpZW50Q29uZmlnID0ge1xuICAvLyBzZXR1cCBzc3IgbW9kZSBpZiB0aGUgY2xpZW50IGlzIGNvbmZpZ3VyZWQgc2VydmVyLXNpZGUgKGV4OiBmb3IgU1NSKVxuICBzc3JNb2RlOiBNZXRlb3IuaXNTZXJ2ZXIsXG59O1xuXG4vLyBjcmVhdGUgYSBuZXcgY2xpZW50IGNvbmZpZyBvYmplY3QgYmFzZWQgb24gdGhlIGRlZmF1bHQgQXBvbGxvIENsaWVudCBjb25maWdcbi8vIGRlZmluZWQgYWJvdmUgYW5kIHRoZSBjbGllbnQgY29uZmlnIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgbWV0ZW9yQ2xpZW50Q29uZmlnID0gKGN1c3RvbUNsaWVudENvbmZpZyA9IHt9KSA9PiAoe1xuICAvLyBkZWZhdWx0IG5ldHdvcmsgaW50ZXJmYWNlIHByZWNvbmZpZ3VyZWQsIHRoZSBuZXR3b3JrIGludGVyZmFjZSBrZXkgaXMgc2V0XG4gIC8vIHRoZXJlIHRvIHNvIHRoYXQgYGNyZWF0ZU1ldGVvck5ldHdvcmtJbnRlcmZhY2VgIGlzIGV4ZWN1dGVkIG9ubHkgd2hlblxuICAvLyBgbWV0ZW9yQ2xpZW50Q29uZmlnYCBpcyBjYWxsZWQuXG4gIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU1ldGVvck5ldHdvcmtJbnRlcmZhY2UoKSxcbiAgLi4uZGVmYXVsdENsaWVudENvbmZpZyxcbiAgLi4uY3VzdG9tQ2xpZW50Q29uZmlnLFxufSk7XG5cbi8vIGdyYWIgdGhlIHRva2VuIGZyb20gdGhlIHN0b3JhZ2Ugb3IgY29uZmlnIHRvIGJlIHVzZWQgaW4gdGhlIG5ldHdvcmsgaW50ZXJmYWNlIGNyZWF0aW9uXG5leHBvcnQgY29uc3QgZ2V0TWV0ZW9yTG9naW5Ub2tlbiA9IChjb25maWcgPSB7fSkgPT4ge1xuICAvLyBwb3NzaWJsZSBjb29raWUgbG9naW4gdG9rZW4gY3JlYXRlZCBieSBtZXRlb3JoYWNrczpmYXN0LXJlbmRlclxuICAvLyBhbmQgcGFzc2VkIHRvIHRoZSBBcG9sbG8gQ2xpZW50IGR1cmluZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgY29uc3QgeyBsb2dpblRva2VuID0gbnVsbCB9ID0gY29uZmlnO1xuXG4gIC8vIE1ldGVvciBhY2NvdW50cy1iYXNlIGxvZ2luIHRva2VuIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlLFxuICAvLyBvbmx5IGV4aXN0cyBjbGllbnQtc2lkZSBhcyBvZiBNZXRlb3IgMS40LCB3aWxsIGV4aXN0IHdpdGggTWV0ZW9yIDEuNVxuICBjb25zdCBsb2NhbFN0b3JhZ2VMb2dpblRva2VuID0gTWV0ZW9yLmlzQ2xpZW50ICYmIEFjY291bnRzLl9zdG9yZWRMb2dpblRva2VuKCk7XG5cbiAgLy8gcmV0dXJuIGEgbWV0ZW9yIGxvZ2luIHRva2VuIGlmIGV4aXN0aW5nXG4gIC8vIGV4OiBncmFiYmVkIGZyb20gbG9jYWwgc3RvcmFnZSBvciBwYXNzZWQgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICByZXR1cm4gbG9jYWxTdG9yYWdlTG9naW5Ub2tlbiB8fCBsb2dpblRva2VuO1xufTtcbiJdfQ==
