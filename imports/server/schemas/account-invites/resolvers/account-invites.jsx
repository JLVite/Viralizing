import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    accountInvite(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        _id: args.inviteID
      };

      return SocialAccountsInvites.findOne(query);

    },
    accountInvites(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        account: args.accountID
      };

      return SocialAccountsInvites.find(query).fetch();

    }
  },
  AccountInvite: {
    owner: (account) => {
      let user = Meteor.users.findOne({ _id: account.owner }, { fields: { services: 0 } });
      return user;
    },
    account: (invite) => {
      let user = SocialAccounts.findOne({ _id: invite.account }, { fields: { services: 0 } });
      return user;
    }
  }
};
