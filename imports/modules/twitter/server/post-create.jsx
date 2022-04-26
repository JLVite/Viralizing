import TwitterConnection from './connection';

let request = require('request').defaults({ encoding: null });

Meteor.methods({
  'twitter-post-create': function (connection, post, callback) {
    if (typeof (connection) === 'string') {
      let account = SocialAccounts.findOne({ _id: connection });
      connection = account.connection;
    }
    const tweetID = connection.id;
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      /*console.log("TWITTER_CLIENT",client.post);*/
      let postMessage = function (post) {
          return client.post('statuses/update', post, function (error, tweet, response) {
            if (error) {
              throw new Meteor.Error('Twitter: Failed to Post', error);
            }
            if (callback) {
              callback();
            }
          });
        },
        postImage = function (post) {
          request.get(post.media, function (error, response, body) {
            if (!error && response.statusCode == 200) {

              client.post('media/upload', { media: body }, function (error, media, response) {

                if (error) {
                  console.log(error);
                  return new Meteor.Error('Twitter: Failed to Upload Media');
                }
                if (!error) {
                  post.media_ids = media.media_id_string;
                  delete post.media;

                  return postMessage(post);
                }
              });
            }
          });
        };

      console.log('TWITTER_POST_DATE:', post.date, '_CURRENT_TIME:', new Date());
      let message = {
        status: post.message// + "Scheduled at: " + moment(post.date).format("h:m A") + " Posted at: " + moment(new Date()).format("h:m A")
      };

      if (post.location) {
        message.lat = post.location[0];
        message.long = post.location[1];
        message.display_coordinates = true;
      }
      if (post.media) {
        message.media = post.media;
      }

      let query;

      if (message.media) {
        query = postImage(message);
      } else {
        query = postMessage(message);
      }

      return query;
    }
  }
});
