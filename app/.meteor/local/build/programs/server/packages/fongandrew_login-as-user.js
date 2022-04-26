(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Accounts = Package['accounts-base'].Accounts;
var Random = Package.random.Random;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/fongandrew_login-as-user/packages/fongandrew_login-as-user.js            //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
(function () {

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/fongandrew:login-as-user/login_as_user_server.js                   //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
(function() {                                                                  // 1
  'use strict';                                                                // 2
                                                                               // 3
  Accounts.impSvc = {};                                                        // 4
                                                                               // 5
  // Call from a Meteor method to set/get a token that client can use to login // 6
  Accounts.impSvc.set = function(userId) {                                     // 7
    var token = Random.secret();                                               // 8
    Meteor.users.update(userId, {                                              // 9
      $set: {"services.impersonate.token": token}                              // 10
    });                                                                        // 11
    return token;                                                              // 12
  };                                                                           // 13
                                                                               // 14
  //////                                                                       // 15
                                                                               // 16
  Accounts.registerLoginHandler("impersonate", function(options) {             // 17
    if (! (options.impToken && typeof options.impToken === 'string'))          // 18
      return undefined; // Don't handle                                        // 19
                                                                               // 20
    var user = Meteor.users.findOne({                                          // 21
      "services.impersonate.token": options.impToken                           // 22
    });                                                                        // 23
                                                                               // 24
    if (user) {                                                                // 25
      return {                                                                 // 26
        userId: user._id                                                       // 27
      };                                                                       // 28
    } else {                                                                   // 29
      return {                                                                 // 30
        error: new Meteor.Error(403, "invalid-token")                          // 31
      };                                                                       // 32
    }                                                                          // 33
  });                                                                          // 34
                                                                               // 35
})();                                                                          // 36
/////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("fongandrew:login-as-user");

})();
