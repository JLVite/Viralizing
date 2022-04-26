import InstagramConnection from './connection';

Meteor.methods({
  'instagram-account-stats': function (userName, profile) {
    if (!profile) {
      profile = SocialAccounts.findOne({ 'network': 'instagram' });
    }

    if (!profile) {
      throw new Meteor.Error('There\'s no matching profile');
    }

    let connection = profile.connection,
      client = InstagramConnection(connection.accessToken);

    if (profile) {
      let posts = [];

      let syncUser = Meteor.wrapAsync(client.user_self, client);

      //console.log("before user");
      let user = syncUser({ access_token: connection.accessToken });
      //console.log("after user", user);

      let syncPosts = Meteor.wrapAsync(client.user_self_media_recent, client),
        getPosts = function (max_id) {
          let query = {
            count: 200
          };
          if (max_id) {
            query.max_id = max_id;
          }

          let result = syncPosts(query, { access_token: connection.accessToken }),
            lastPost = result[(result.length - 1)];
          posts = [...posts, ...result];

          if (lastPost) {
            if (max_id) {
              if (max_id !== lastPost.id) {
                getPosts(lastPost.id);
              }
            } else {
              getPosts(lastPost.id);
            }
          }
        };

      getPosts();

      let samplePost = { created_time: Number(new Date()) / 1000 };
      const first = posts[0] || samplePost;
      const last = posts[posts.length - 1] || samplePost;

      let comments = 0;
      let likes = 0;

      for (const x of posts) {
        comments += x.comments.count;
        likes += x.likes.count;
      }

      let result = {
        comments,
        commentsPerPost: comments / posts.length,
        likes,
        likesPerPost: likes / posts.length,
        engagement: ((comments + likes) / posts.length) / user.counts.followed_by,
        followers: user.counts.followed_by,
        following: user.counts.follows,
        posts: user.counts.media,
        postsPerDay: (posts.length / (Math.abs((moment(new Date(Number(first.created_time) * 1000)).diff(moment(new Date(Number(last.created_time) * 1000)), 'days')))))
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
