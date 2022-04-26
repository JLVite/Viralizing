(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Herald = Package['kestanous:herald'].Herald;
var _ = Package.underscore._;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/kestanous_herald-web-notifications/packages/kestanous_herald-web-notifications. //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
(function () {

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/kestanous:herald-web-notifications/lib/web-notifications.js               //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var runner = {                                                                        // 1
  name: 'webNotification',                                                            // 2
  where: ['client']                                                                   // 3
};                                                                                    // 4
                                                                                      // 5
runner.run = function (notification, user) {                                          // 6
  //respect the user and w3c                                                          // 7
  if (!Notification.permission) return;                                               // 8
  if (Notification.permission == 'denied') return;                                    // 9
                                                                                      // 10
  //TODO: Check if user is idle!                                                      // 11
                                                                                      // 12
  var title = '';                                                                     // 13
  if (_.isFunction(this.title)) {                                                     // 14
    title = this.title.call(notification, user);                                      // 15
  } else {                                                                            // 16
    title = this.title;                                                               // 17
  }                                                                                   // 18
                                                                                      // 19
  var options = {};                                                                   // 20
                                                                                      // 21
  //tag is an id for finding and reduce same notification spam, so _id is appropriate // 22
  options.tag = notification._id;                                                     // 23
                                                                                      // 24
  if (_.isFunction(this.body))                                                        // 25
    options.body = this.body.call(notification, user);                                // 26
  else                                                                                // 27
    options.body = this.body;                                                         // 28
                                                                                      // 29
  //optionals                                                                         // 30
  if (this.dir) {                                                                     // 31
    if (_.isString(this.dir))                                                         // 32
      options.dir = this.dir;                                                         // 33
    else                                                                              // 34
      options.dir = this.dir.call(notification, user);                                // 35
  }                                                                                   // 36
                                                                                      // 37
  if (this.lang) {                                                                    // 38
    if (_.isString(this.lang))                                                        // 39
      options.lang = this.lang;                                                       // 40
    else                                                                              // 41
      options.lang = this.lang.call(notification, user);                              // 42
  }                                                                                   // 43
                                                                                      // 44
  if (this.icon) {                                                                    // 45
    if (_.isString(this.icon))                                                        // 46
      options.icon = this.icon;                                                       // 47
    else                                                                              // 48
      options.icon = this.icon.call(notification, user);                              // 49
  }                                                                                   // 50
                                                                                      // 51
  var windowNotification = new Notification(title, options);                          // 52
                                                                                      // 53
  // onclick focus the window                                                         // 54
  if (_.isFunction(this.onclick)) {                                                   // 55
    windowNotification.onclick = this.onclick;                                        // 56
  } else {                                                                            // 57
    windowNotification.onclick = function (e) {                                       // 58
      window.focus();                                                                 // 59
      if (notification.url) {                                                         // 60
        // check if iron:router is set                                                // 61
        if (Package['iron:router']) {                                                 // 62
          Router.go(notification.url);                                                // 63
        } else {                                                                      // 64
          window.location.href = notification.url;                                    // 65
        }                                                                             // 66
      }                                                                               // 67
    }                                                                                 // 68
  }                                                                                   // 69
};                                                                                    // 70
                                                                                      // 71
runner.check = function (notification, user) {                                        // 72
  if (!(_.isString(this.title) || _.isFunction(this.title)))                          // 73
    throw new Error('Herald-Web-Notifications: title must be string or function')     // 74
                                                                                      // 75
  if (!(_.isString(this.body) || _.isFunction(this.body)))                            // 76
    throw new Error('Herald-Web-Notifications: body must be string or function')      // 77
};                                                                                    // 78
                                                                                      // 79
Herald.addRunner(runner);                                                             // 80
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

//////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("kestanous:herald-web-notifications");

})();
