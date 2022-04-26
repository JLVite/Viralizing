import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    campaignInvite(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        _id: args.inviteID
      };

      return CampaignInvites.findOne(query);

    },
    campaignInvites(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        campaign: args.campaignID
      };

      return CampaignInvites.find(query).fetch();

    }
  },
  CampaignInvite: {
    owner: (account) => {
      let user = Meteor.users.findOne({ _id: account.owner }, { fields: { services: 0 } });
      return user;
    },
    campaign: (invite) => {
      let campaign = Campaigns.findOne({ _id: invite.campaign }, { fields: { services: 0 } });
      return campaign;
    }
  }
};
