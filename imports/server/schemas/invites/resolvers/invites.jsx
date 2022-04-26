import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    invitesCampaign(root, args, context) {
      console.log('INVITES_CAMPAIGNS', args);

      let invites = Invites.find({ campaign: args.campaignID }).fetch();
      console.log('LAST OUTPUT',invites)
      return invites;
    }
  },
  Invite: {
    campaign: (invite) => {
      let user = Campaigns.findOne({ _id: invite.campaign });
      return user;
    },
    influencers: (invite) => {
      let members = SocialAccounts.find({
        _id: { $in: invite.influencers }
      }, { fields: { connection: 0 } }).fetch();
      return members;
    },
    owner: (invite) => {
      let user = Meteor.users.findOne({ _id: invite.owner }, { fields: { services: 0 } });
      return user;
    },
    teamAttacks: (invite) => {
      const arrayIDs = invite.teamAttacks.map(teamAttack => teamAttack._id)
      return TeamAttack.find({ _id: { $in: arrayIDs } }).fetch();
    }
  }
};
