import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'posts-scheduled-run': function () {
    let currentTime = moment().second(0).toDate(),
      dateCeil = moment(currentTime).add(4, 'minutes').toDate();
    let query = {
      status: 'scheduled',
      date: { $lte: dateCeil }
    };
    let posts = Posts.find(query).fetch();
    let accountIDs = posts.map((p) => p.account._id);
    let accounts = SocialAccounts.find({
      _id: { $in: accountIDs }
    }, {
      fields: {
        network: 1,
        _id: 1,
        connection: 1
      }
    }).fetch();

    if (posts.length === 0) {
      //console.log("NO_POSTS_FOUND_TO_RUN");
    }
    //console.log("POSTS_RUN_TIME_FROM:", currentTime, "_TO_", dateCeil, "_FOUND:", posts.length, "_POSTS");
    posts.forEach(function (post) {
      let account = accounts.filter((a) => a._id === post.account._id)[0];
      if (account) {
        let method = '';
        switch (account.network) {
          case 'facebook':
            method = 'facebook-post-create';
            break;
          case 'twitter':
            method = 'twitter-post-create';
            break;
          case 'instagram':
            method = 'instagram-post-create';
            break;
          default:
            throw new Meteor.error(500, 'Invalid Social Network');
        }
        post.data.date = post.date;
        Meteor.call(method, account.connection, post.data, function () {
          //console.log("SOCIAL_MEDIA_POST_SUCCESFUL");
          Posts.update({ _id: post._id }, { $set: { status: 'published' } });
        });
      } else {
        //TODO: Send Email to acknowledge error in dev.
        //console.log("[ERROR]: POSTING ERROR: NO ACCOUNT MARCH", post._id);
      }
    });
    return posts;
  }
});
