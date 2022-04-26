import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'notifications-create': function (userID, data) {
    //console.log("NOTIFICATIONS_CRATE");
    let params = {
      courier: 'appNotifications', //required
      data: { //optional and whatever you need
        type: 'info',
        title: data.title,
        description: data.description
      }
    };
    if (data.url) {
      params.url = data.url;
    }

    return Herald.createNotification(userID, params);
  }
});
