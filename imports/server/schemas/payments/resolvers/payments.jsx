import { Meteor } from 'meteor/meteor';
import moment from 'moment';

function getMonthDateRange(year, month) {
  console.log('GET_MONTH_DATE_RANGE_BEFORE', year, month);
  if (typeof year === 'string') year = Number(year);
  if (typeof month === 'string') month = Number(month);
  console.log('GET_MONTH_DATE_RANGE_After', year, month);
  // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
  // array is 'year', 'month', 'day', etc
  let startDate = moment([year, month - 1]);

  // Clone the value before .endOf()
  let endDate = moment(startDate).endOf('month');

  // just for demonstration:
  console.log(startDate.toDate());
  console.log(endDate.toDate());

  // make sure to call toDate() for plain JavaScript date type
  return { $gt: startDate.toDate(), $lt: endDate.toDate() };
}

export default {
  Query: {
    paymentsOwn(root, args, context) {
      let userID = context.userId;
      let { year, month } = args;

      let usersQuery = {
        $or: [{ owner: userID }, { manager: userID }, { shares: { $in: [userID] } }],
        delete: { $ne: true }
      };
      let userIDs = SocialAccounts.find(usersQuery, { fields: { _id: 1 } }).fetch().map(u => u._id);

      console.log('USER_IDS', userIDs);

      let query = {
        $or: [{ from: userID }, { to: { $in: userIDs } }]
      };

      if (year && month) {
        query.date = getMonthDateRange(year, month);
      }
      console.log('PAYMENTS_OWN', args);

      console.log('PAYPEMTS_OWN_QUERY', query);

      let results = Payments.find(query).fetch().map(p => Object.assign({}, p, {
        type: p.from === userID ? 'outgoing' : 'incoming'
      }));

      console.log('PAYMENTS_OWN', results.length);

      return results;
    }
  },
  Payment: {
    from: (payment) => {
      return Meteor.users.findOne({ _id: payment.from }, { fields: { services: 0 } });
    },
    to: (payment) => {
      return SocialAccounts.findOne({ _id: payment.to }, { fields: { services: 0 } });
    },
    campaign: (payment) => {
      return Campaigns.findOne({ _id: payment.campaign });
    },
    post: (payment) => {
      return Posts.findOne({ _id: payment.post }) || {};
    },
  }
};
