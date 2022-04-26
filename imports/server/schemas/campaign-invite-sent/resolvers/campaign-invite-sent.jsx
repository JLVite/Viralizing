import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    campaignInviteSent(root, args, context) {
      const inviteSent = CampaignInviteSent.findOne({ _id: args._id });
      return inviteSent;
    },

    campaignInviteSentOwn(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      console.log('ARGS',args);
      const query = {
        ownerId: userID,
      };

      return CampaignInviteSent.find(query).fetch();
    },
    campaignInviteSentCount(root, args, context) {
      const query = {
        accountId: args._id,
      };
      return CampaignInviteSent.find(query).count();
    },
  },
  CampaignInviteSent: {

  },
};
