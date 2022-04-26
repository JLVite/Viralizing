Meteor.methods({
  'instagram-post-create': function (connection, post, callback) {
    //console.log("INSTAGRAM_POST_CREATE");
    //console.log("INSTAGRAM_POST_DATE:", post.date, "_CURRENT_TIME:", new Date());

    Meteor.call('notifications-create', 'zfbP3aTqiP8yAg8NQ', {
      title: 'Instagram Post',
      description: 'You have a scheduled post'
    });
  }
});
