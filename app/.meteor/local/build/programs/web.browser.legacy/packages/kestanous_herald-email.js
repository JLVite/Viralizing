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
var Herald = Package['kestanous:herald'].Herald;
var _ = Package.underscore._;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/kestanous_herald-email/packages/kestanous_herald-email.js                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/kestanous:herald-email/lib/notifications-email.js                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var runner = {                                                                                         // 1
  name: 'email',                                                                                       // 2
  where: ['server']                                                                                    // 3
}                                                                                                      // 4
                                                                                                       // 5
runner.run = function (notification, user) {                                                           // 6
  this.emailRunner.call(notification, user);                                                           // 7
};                                                                                                     // 8
                                                                                                       // 9
runner.check = function () {                                                                           // 10
  if (!_.isFunction(this.emailRunner)) throw new Error('Herald-Email: emailRunner must be a function') // 11
};                                                                                                     // 12
                                                                                                       // 13
                                                                                                       // 14
Herald.addRunner(runner);                                                                              // 15
                                                                                                       // 16
// == TODO: emailSummery ==                                                                            // 17
// Herald.addRunner('emailSummery', function (notification, user) { /* noop */ });                     // 18
//                                                                                                     // 19
// Fire email summery based on some timer/date-time.                                                   // 20
// Will get all applicable notifications from user and summarize them.                                 // 21
                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("kestanous:herald-email");

})();
