import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    campaign(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      console.log('CAMPAIGN', args);
      const campaign = Campaigns.findOne({ _id: args._id });
      console.log('FIND_CAMPAIGN', args._id);
      console.log('campaign', campaign);
      if (campaign && userID === campaign.owner) {
        console.log('IsOwner');
        return campaign;
      }
      return null;
    },
    campaignsOwn(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      const query = {
        owner: userID,
      };

      return Campaigns.find(query).fetch();
    },
    campaignsPartOf(root, args, context) {
      const arrInvites = [];
      let arrCampaigns = [];
      const arrAssociates = [];
      const accountsID = SocialAccounts.find().map(account => account.owner);
      const invites = accountsID.map((id) => {
        const associates = Invites.find({ owner: id }).fetch();
        return associates.filter(arr => arrAssociates.push(arr.owner));
      });

      invites.map(i => i.map(a => arrInvites.push(a.owner)));
      const unique = [...new Set(arrInvites)];
      unique.map(id => arrCampaigns = Campaigns.find({ owner: id }).fetch());

      return arrCampaigns;
    },
  },
  Campaign: {
    owner: (account) => {
      const user = Meteor.users.findOne({ _id: account.owner }, { fields: { services: 0 } });
      return user;
    },
    manager: (account) => {
      const user = Meteor.users.findOne({ _id: account.manager }, { fields: { services: 0 } });
      return user;
    },
    shares: (account) => {
      const users = Meteor.users.find({ _id: { $in: account.shares } }, { fields: { services: 0 } }).fetch();
      return users;
    },
  },
  CampaignInformation: {
    brands: (account) => {
      if (!account.brands || account.brands.length === 0) {
        return [];
      }
      const result = SocialAccounts.find({
        _id: { $in: account.brands },
      }, { fields: { connection: 0 } }).fetch();
      return result;
    },
  },
};
