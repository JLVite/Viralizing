import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    reportsOwn(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        owner: userID
      };

      return Reports.find(query).fetch();

    },
    report(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        _id: args.reportId
      };

      return Reports.findOne(query);
    },
  },
  Report: {
    owner: (account) => {
      let user = Meteor.users.findOne({ _id: account.owner }, { fields: { services: 0 } });
      return user;
    }
  }
};
