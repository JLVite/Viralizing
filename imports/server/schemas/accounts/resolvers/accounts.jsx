import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    account(root, args, context) {
      // Only return the current user, for security
      const account = SocialAccounts.findOne({ _id: args._id });
      const userID = context.userId;
      if ((userID !== account.owner) && (userID !== account.manager) && (account.shares.indexOf(userID) == -1)) {
        return null;
      }
      console.log(account);
      return account;
    },
    accountsOwnSearch(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      const query = {
        $or: [{ owner: userID }, { manager: userID }, { shares: { $in: [userID] } }],
        delete: { $ne: true },
      };

      if (args.query) {
        const regex = new RegExp(args.query, 'i');
        query.$and.push({
          $or: [
            { 'information.name': { $regex: regex } },
            { 'information.lastName': { $regex: regex } },
            { network: { $regex: regex } },
          ],
        });
      }

      console.log('ACCOUNTS_OWN', query);

      return SocialAccounts.find(query, { limit: 15 }).fetch();
    },
    accountsByTag(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      re = new RegExp(args.tag, 'i');
      console.log('ACCOUNTS_BY_TAG: ', args.tag);

      // db.accounts.find({groups:{$in:[/^ibol$/i]}}).count()
      const query = {
        $and: [
          { $or: [{ owner: userID }, { manager: userID }, { shares: { $in: [userID] } }] },
        ],
        groups: {
          $in: [re],
        },
      };
      return SocialAccounts.find(query).fetch();
    },
    accounts(root, args, context) {
      const userID = context.userId;
      return SocialAccounts.find({
        $or: [{ owner: userID }, { manager: userID }, {
          shares: { $in: [userID] },
        }],
        delete: { $ne: true },
      }).fetch();
    },
    accountFBPages(root, args, context) {
      const userID = context.userId;
      const fbPages = Meteor.call('facebook-pages-list', args.accountID).data;
      const PagesIDs = fbPages.map(p => p.id);
      const dbPages = SocialAccounts.find({
        type: 'page',
        'connection.id': { $in: PagesIDs },
      }, { fields: { 'connection.id': 1 } }).fetch().map(p => p.connection.id);
      console.log('DB_PAGES', dbPages);
      return fbPages.filter(p => dbPages.indexOf(p.id) === -1);
    },
    accountFBGroups(root, args, context) {
      const userID = context.userId;
      const fbGroups = Meteor.call('facebook-groups-list', args.accountID).data;
      const groupsID = fbGroups.map(p => p.id);
      const dbGroups = SocialAccounts.find({
        type: 'group',
        'connection.id': { $in: groupsID },
      }, { fields: { 'connection.id': 1 } }).fetch().map(p => p.connection.id);

      console.log('DB_GROUP', dbGroups);
      return fbGroups.filter(p => dbGroups.indexOf(p.id) === -1);
    },
  },
  Account: {
    manager: (account) => {
      const user = Meteor.users.findOne({ _id: account.manager }, { fields: { services: 0 } });
      return user;
    },
    owner: (account) => {
      const user = Meteor.users.findOne({ _id: account.owner }, { fields: { services: 0 } });
      return user;
    },
    shares: (account) => {
      const users = Meteor.users.find({ _id: { $in: account.shares } }, { fields: { services: 0 } }).fetch();
      return users;
    },
    campaignsCount: (account) => {
      // TODO: Add Distinct to this query
      const count = Campaigns.find({ 'information.brands': { $in: [account._id] } }).count();
      return count;
    },
  },
  FBPage: {
    picture: page => page.picture.data.url,
  },
};
