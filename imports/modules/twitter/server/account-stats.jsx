import TwitterConnection from './connection';

Meteor.methods({
  'twitter-account-stats': function (screenName, profile) {
    if (!profile) {
      profile = SocialAccounts.findOne({ 'network': 'twitter' });
    }

    if (!profile) {
      throw new Meteor.Error('There\'s no matching profile');
      return;
    }

    let connection = profile.connection,
      client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (profile) {
      let posts = [];

      let syncClient = Meteor.wrapAsync(client.get, client),
        getTweets = function (max_id) {
          let query = {
            screen_name: screenName,
            count: 200,
            include_rts: 0,
            exclude_replies: 1
          };
          if (max_id) {
            query.max_id = max_id;
          }

          let result = syncClient('statuses/user_timeline', query),
            lastTweet = result[(result.length - 1)];
          posts = [...posts, ...result];

          if (lastTweet) {
            if (max_id) {
              if (max_id !== lastTweet.id) {
                getTweets(lastTweet.id);
              }
            } else {
              getTweets(lastTweet.id);
            }
          }
        };

      getTweets();

      const first = posts[0];
      const last = posts[posts.length - 1];

      let retweets = 0;
      let favorites = 0;

      for (const x of posts) {
        retweets += x.retweet_count;
        favorites += x.favorite_count;
      }

      let user = posts[0].user;

      let result = {
        retweets,
        retweetsPerPost: retweets / posts.length,
        favorites,
        favoritesPerPost: favorites / posts.length,
        engagement: ((retweets + favorites) / posts.length) / user.followers_count,
        followers: user.followers_count,
        following: user.friends_count,
        posts: user.statuses_count,
        postsPerDay: (posts.length / (Math.abs((moment(new Date(first.created_at)).diff(moment(new Date(last.created_at)), 'days')))))
      };

      Object.keys(result).forEach((key) => {
        if (Number.isNaN(result[key])) {
          result[key] = 0;
        }
      });

      if (result.postsPerDay === Infinity) {
        result.postsPerDay = 0;
      }

      return result;
    }
  }
});
