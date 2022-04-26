import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    postsOwn(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      return Posts.find({ owner: userID }).fetch();
    },
    postsInvite(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      let query = {
        campaign: args.campaignID,
        invite: args.inviteID
      };
      let result = Posts.find(query).fetch();
      console.log('POSTS_INVITE', query, result.length);
      return result;
    }
  },
  Post: {
    owner: (post) => {
      let user = Meteor.users.findOne({ _id: post.owner }, { fields: { services: 0 } });
      return user;
    }
  },
  PostAccount: {
    fullProfile: (account) => {
      let user = SocialAccounts.findOne({ _id: account._id }, { fields: { services: 0 } });
      return user;
    }
  }
};
