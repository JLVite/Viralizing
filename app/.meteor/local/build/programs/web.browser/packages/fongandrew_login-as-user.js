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
var Random = Package.random.Random;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/fongandrew_login-as-user/packages/fongandrew_login-as-user.js  //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/fongandrew:login-as-user/login_as_user_client.js         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function() {                                                        // 1
  'use strict';                                                      // 2
                                                                     // 3
  // Login with token obtained with Accounts.impSvc.set on server    // 4
  Accounts.loginWithImpersonate = function(token, callback) {        // 5
    Accounts.callLoginMethod({                                       // 6
      methodArguments: [{                                            // 7
        impToken: token                                              // 8
      }],                                                            // 9
      userCallback: callback                                         // 10
    });                                                              // 11
  };                                                                 // 12
                                                                     // 13
})();                                                                // 14
///////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("fongandrew:login-as-user");

})();
