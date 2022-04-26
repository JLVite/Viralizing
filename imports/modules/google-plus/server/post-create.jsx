import GoogleConnection from './connection';
import { HTTP } from 'meteor/http';

let request = require('request').defaults({ encoding: null });

Meteor.methods({
  'google-post-create': function (profileID, message, callback) {
    let profile = Profiles.findOne({ 'network': 'google' });

    if (!profile) {
      throw new Meteor.Error('There\'s no matching profile');
    }

    let connection = profile.connection,
      client = GoogleConnection(connection.accessToken);

    if (client) {
      let postMessage = function (post) {
          return client.post('statuses/update', post, function (error, tweet, response) {
            if (error) {
              console.log('TWITTER_ERROR');
              throw new Meteor.Error('Twitter: Failed to Post');
            }
            console.log('TWEET_SUCCESSFUL', tweet);  // Tweet body.
            if (callback) {
              callback();
            }
          });
        },
        postImage = function (post) {
          return request.get(post.media, function (error, response, body) {
            if (!error && response.statusCode == 200) {

              client.post('media/upload', { media: body }, function (error, media, response) {

                if (error) {
                  throw new Meteor.Error('Twitter: Failed to Upload Media');
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

      message = {
        status: 'I Love Pagani!!!! ' + moment().format('HH:MM:SS A'),
        lat: '37.7821120598956',
        long: '-122.400612831116',
        display_coordinates: true,
        media: 'https://c1.staticflickr.com/8/7340/9722529830_cd8851126e_b.jpg'
      };
      var body = 'My first post using facebook-node-sdk';
      console.log(Object.keys(client.library.activities));
      client.library.people.get({
        userId: 'me'
      }, function (err, response) {
        console.log('ERROR', err);
        console.log('RESPONSE', response);
      });

      HTTP.call('POST', 'https://www.googleapis.com/plusDomains/v1/people/{userId}/activities', {
        data: {
          'object': {
            'originalContent': 'Happy Monday! #caseofthemondays',
          },
          'access': {
            'items': [{
              'type': 'domain'
            }],
            'domainRestricted': true
          }
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'OAuth$' + connection.accessToken
        }
      });

      /*
       let query;

       if (message.media) {
       query = postImage(message);
       } else {
       query = postMessage(message);
       }

       return query;*/
    }
  }
});
