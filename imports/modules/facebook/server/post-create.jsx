import FacebookConnection from './connection';

let request = require('request').defaults({ encoding: null });

Meteor.methods({
  'facebook-post-create': function (connection, postData, callback) {
    let client = FacebookConnection(connection.accessToken);

    if (client) {
      let postMessage = function (post) {
          return client.api('me/feed', 'post', { message: post.status }, function (res) {
            if (!res || res.error) {
              console.log(!res ? 'error occurred' : res.error);
              return;
            }
            console.log('Post Id: ' + res.id);
            if (callback) {
              callback();
            }
          });
        },
        postImage = function (post) {
          return request.get(post.media, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              return client.api('me/photos', 'post', {
                url: post.media,
                caption: post.status
              }, function (res) {
                if (!res || res.error) {
                  console.log(!res ? 'error occurred' : res.error);
                  return;
                }
                console.log('Post Id: ' + res.post_id);
                if (callback) {
                  callback();
                }
              });
            }
          });
        };

      /*console.log("FACEBOOK_POST_DATE:", post.date, "_CURRENT_TIME:", new Date());*/
      let message = {
        status: postData.message //+ "Scheduled at: " + moment(post.date).format("h:m A") + " Posted at: " + moment(new Date()).format("h:m A")
      };

      if (postData.location) {
        message.lat = postData.location[0];
        message.long = postData.location[1];
        message.display_coordinates = true;
      }
      if (postData.media) {
        message.media = postData.media;
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
