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

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/mixmax_smart-disconnect/disconnect-when-backgrounded.js                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var disconnectTimer = null;

// 60 seconds by default
var disconnectTime = (Meteor.settings && Meteor.settings.public && Meteor.settings.public.disconnectTimeSec || 60) * 1000;
var disconnectVoids = (Meteor.settings && Meteor.settings.public && Meteor.settings.public.disconnectVoids || []);

Meteor.startup(disconnectIfHidden);

document.addEventListener('visibilitychange', disconnectIfHidden);

if (Meteor.isCordova) {
    document.addEventListener('resume', function () { Meteor.reconnect(); });
    document.addEventListener('pause', function () { createDisconnectTimeout(); });
}

function disconnectIfHidden() {
    removeDisconnectTimeout();

    if (document.hidden) {
        if(!Package["iron:router"] || disconnectVoids.indexOf(Router.current().route.getName()) < 0){
            createDisconnectTimeout();
        }
    } else {
        Meteor.reconnect();
    }
}

function createDisconnectTimeout() {
    removeDisconnectTimeout();

    disconnectTimer = setTimeout(function () {
        Meteor.disconnect();
    }, disconnectTime);
}

function removeDisconnectTimeout() {
    if (disconnectTimer) {
        clearTimeout(disconnectTimer);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("mixmax:smart-disconnect");

})();
