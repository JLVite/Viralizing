import FacebookConnection from './connection';

Meteor.methods({
  'facebook-account-stats': function (userID, profile) {
    if (!profile) {
      profile = SocialAccounts.findOne({ 'network': 'facebook' });
    }

    if (!profile) {
      throw new Meteor.Error('There\'s no matching profile');
    }

    let connection = profile.connection;
    let client = FacebookConnection(connection.accessToken);

    if (profile) {
      let posts = [];
      let fields = [];
      let likesPerPage = null;
      if (profile.type === 'fanPage') {
        fields = ['fan_count'];
      }

      let syncFB = Meteor.wrapAsync(client.napi, client);

      let user = syncFB(userID, { fields });

      let lastPost = null;

      let getPosts = function (until) {
        let query = userID + '/feed';
        let params = {
          limit: 100,
          fields: ['id', 'message', 'picture', 'link', 'shares', 'created_time', 'comments.limit(1).summary(true)', 'likes.limit(1).summary(true)']
        };

        if (until) {
          params.until = until;
        }

        let result = syncFB(query, params);

        if (lastPost) {
          if (lastPost.id === result.data[result.data.length - 1].id) {
            return;
          }
        }

        posts = [...posts, ...result.data];
        lastPost = result.data[result.data.length - 1];

        let lastPostCreation = new Date(result.data[result.data.length - 1].created_time);

        if (result.data.length > 1 && result.paging.next) {
          getPosts(Number(lastPostCreation) / 1000);
        }
      };

      let getPageLikes = function (until) {
        let day = new Date();
        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 1);

        let query = userID + '/insights';
        let params = {
          pretty: 0,
          since: day.toJSON().slice(0, 10),
          until: nextDay.toJSON().slice(0, 10),
          metric: 'page_fans'

        };

        let result = syncFB(query, params);
        console.log(result);

        if (result.data && result.data[0]) {
          return result.data.values[0].value;
        } else {
          return null;
        }
      };

      getPosts();

      const first = posts[0];
      const last = posts[posts.length - 1];

      let comments = 0;
      let likes = 0;
      let shares = 0;

      for (const x of posts) {
        if (x.comments) {
          comments += x.comments.summary.total_count;
        }
        if (x.likes) {
          likes += x.likes.summary.total_count;
        }
        if (x.shares) {
          shares += x.shares.count;
        }
      }

      let result = {
        comments,
        commentsPerPost: comments / posts.length,
        likes,
        likesPerPost: likes / posts.length,
        shares,
        sharesPerPost: shares / posts.length,
        engagement: ((comments + likes + shares) / posts.length) / user.fan_count,
        profileLikes: getPageLikes(),
        posts: posts.length,
        postsPerDay: (posts.length / (Math.abs((moment(first.created_time)).diff(moment(new Date(last.created_time)), 'days'))))
      };

      if (user.fan_count) {
        result.profileLikes = user.fan_count;
      }

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
