import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    eventsOwn(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      console.log('EVENTS_OWN', args);
      let posts = [];
      let campaigns = [];
      if (args.networks.length > 0) {
        let aggregator = args.networks.map((network)=>({'account.network':network}))
        posts = Posts.find({ owner: userID, $or: aggregator }).fetch().map((p) => ({
          _id: p._id,
          type: 'post',
          allDay: false,
          start: p.date,
          end: moment(new Date(p.date)).add(5, 'minutes').toDate(),
          title: ((p.account.name || '') + ' ' + (p.account.lastName || '')),
          preview: p.account.avatar,
          network: p.account.network,
          accountId: p.account._id
        }));
      }
      if (args.all) {
        campaigns = Campaigns.find({ owner: userID }).fetch().map((c) => ({
          _id: c._id,
          type: 'campaign',
          allDay: true,
          start: c.information.dateStart,
          end: c.information.dateEnd,
          title: c.information.name,
          preview: c.information.profile,
          network: null
        }));
      }
      //TODO: IMPLEMENT REST OF FILTERS
      return posts.concat(campaigns);
    },
    eventsCampaign(root, args, context) {
      let query = {
        campaign: args.campaignID
      };

      if (!args.all) {
        let filters = [];
        Object.keys(args).forEach((key) => {
          if (args[key]) {
            filters.push(key);
          }
        });
        query.status = { $in: filters };
      }

      let posts = Posts.find(query).fetch().map((p) => ({
        _id: p._id,
        type: 'post',
        allDay: false,
        start: p.date,
        end: moment(new Date(p.date)).add(5, 'minutes').toDate(),
        title: ((p.account.name || '') + ' ' + (p.account.lastName || '')),
        preview: p.account.avatar,
        network: p.account.network
      }));
      return posts;
    },
    eventsAccount(root, args, context) {
      let query = {
        'account._id': args.accountID
      };
      if (!args.all) {
        let filters = [];
        Object.keys(args).forEach((key) => {
          if (args[key]) {
            filters.push(key);
          }
        });
        query.status = { $in: filters };
      }
      let posts = Posts.find(query).fetch().map((p) => ({
        _id: p._id,
        type: 'post',
        allDay: false,
        start: p.date,
        end: moment(new Date(p.date)).add(5, 'minutes').toDate(),
        title: ((p.account.name || '') + ' ' + (p.account.lastName || '')),
        preview: p.account.avatar,
        network: p.account.network,
      }));
      return posts;
    }
  }
};
