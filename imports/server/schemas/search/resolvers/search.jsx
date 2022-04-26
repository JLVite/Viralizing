import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    search(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      let results = [];
      console.log('SOCIAL_MEDIA_SEARCH', args);
      if (args.google) {
        console.log('GOOGLE_SEARCH');
        let google = Meteor.call('google-search', args.query);
        if (google.error) {
          console.log('ERROR');
          let newItem = {
            link: 'https://viralizing.me',
            title: 'Unavailable',
            description: 'Google Search is not currently available.',
            date: null,
            network: 'google',
            media: {
              type: null,
              url: null,
              preview: null
            },
            user: {
              name: null,
              screenName: null,
              avatar: null
            }
          };
          results.push(newItem);
        } else {
          if (!google.items) {
            console.log('GOOGLE_ERROR', google);
          } else {
            google.items.forEach((item) => {
              let newItem = {
                link: item.link,
                title: item.title,
                description: item.snippet,
                date: null,
                network: 'google',
                media: {
                  type: null,
                  url: null,
                  preview: null
                },
                user: {
                  name: null,
                  screenName: null,
                  avatar: null
                }
              };
              results.push(newItem);
            });
          }
        }
      }
      if (args.twitter) {
        console.log('TWITTER_SEARCH');
        let twitter = Meteor.call('twitter-search', args.query);
        twitter.statuses.forEach((item) => {
          let newItem = {
            link: null,
            title: null,
            description: item.text,
            date: item.created_at,
            network: 'twitter',
            media: {},
            user: {
              name: item.user.name,
              screenName: item.user.screen_name,
              avatar: item.user.profile_image_url_https
            }
          };
          if (item.entities && item.entities.media && item.entities.media[0] && item.entities.media[0].media_url_https) {
            let entityMedia = item.entities.media[0];
            newItem.media = {
              type: entityMedia.type,
              url: entityMedia.media_url_https,
              preview: null,
            };
          }
          if (item.extended_entities && item.extended_entities.media && item.extended_entities.media[0] && item.extended_entities.media[0].video_info) {
            let video = item.extended_entities.media[0].video_info;
            newItem.media = {
              type: 'video',
              url: video.variants[0].url,
              preview: item.entities.media[0].media_url_https
            };
          }
          results.push(newItem);
        });
      }
      return results;
    },
    woeidPlaces(root, args, context) {
      return Meteor.call('twitter-trends-available');
    },
    twitterTrends(root, args, context) {
      if (!args.woeid) {
        return [];
      }
      let res = Meteor.call('twitter-trends-place', args.woeid);
      return res[0].trends;
    }
  },
  TwitterTrendingPlace: {
    parent: function (place) {
      return place.parentid;
    },
    type: function (place) {
      return place.placeType.name;
    }
  },
  TwitterTrends: {
    hashtag: function (trend) {
      return trend.name;
    },
    promoted: function (trend) {
      return trend.promoted_content;
    },
    volume: function (trend) {
      return trend.tweet_volume;
    }
  }
};
