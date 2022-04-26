import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    teamAttacksOwn(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        owner: userID
      };

      return TeamAttack.find(query).fetch();
    },

    teamAttack(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';

      let query = {
        _id: args._id
      };

      return TeamAttack.findOne(query);
    },

    accountsTeamAttack(root, args, context) {
      const userID = context.userId || 'zfbP3aTqiP8yAg8NQ';
      console.log('ACCOUNTS_TEAM_ATTACK', args);
      let {
        action_type,
        results_order,
        influencer_gender,
        influencer_age,
        influencer_country,
        influencer_followers,
        audience_gender,
        audience_age,
        audience_nrssg,
        audience_country,
        influencer_networks
      } = args;

      let getBounds = function (bounds, validator) {
        let $gt = bounds.min;
        let $lt = bounds.max;

        if (validator) {
          $gt = validator(bounds.min);
          $lt = validator(bounds.max);
        }

        return { $gt, $lt };
      };

      let query = {
        suspended: { $ne: true },
        delete: { $ne: true },
        network: { $in: influencer_networks }
      };

      let options = {};

      if (results_order && action_type) {
        options.sort = {};
        switch (results_order) {
          case 'higherPrice':
            options.sort[`pricing.${action_type}`] = -1;
            break;
          case 'lowestPrice':
            options.sort[`pricing.${action_type}`] = 1;
            break;
          case 'higherEngagement':
            options.sort['statistics.engagement'] = -1;
            break;
          case 'lowerEngagement':
            options.sort['statistics.engagement'] = 1;
            break;
        }
      }

      if (action_type) {
        if (action_type === 'post' || action_type === 'share') {
          query[`pricing.${action_type}`] = { $exists: true, $ne: '' };
        }
      }

      if (influencer_gender && influencer_gender !== 'all') {
        query['information.gender'] = influencer_gender;
      }

      if (influencer_age && influencer_age !== 'all') {
        influencer_age = { min: influencer_age.max, max: influencer_age.min };
        query['information.birthDate'] = getBounds(influencer_age, function (value) {
          return moment().subtract(Number(value), 'years').toDate();
        });
      }

      console.log('ACCOUNTS_TEAM_ATTACK_QUERY', query, options);
      return SocialAccounts.find(query, options).fetch();
      //TODO: ADD FILTER ONLY INFLUENCER ACCOUNTS

      console.log('INFLUENCER_FOLLOWERS', influencer_followers);

      //ARGS: { gender: 'all', age: 'all', country: 'all', followers: 'all' }

      if (influencer_country && influencer_country !== 'all') {
        query['information.country'] = { $in: influencer_country };
      }

      if (influencer_followers && influencer_followers !== 'all') {
        query['statistics.followers'] = getBounds(influencer_followers, Number);
      }

      if (audience_gender && audience_gender !== 'all') {
        query['information.audience.gender'] = audience_gender;
      }

      if (audience_nrssg && audience_nrssg !== 'all') {
        query['information.audience.nrssg'] = audience_nrssg;
      }

      if (audience_country && audience_country !== 'all') {
        query['information.audience.country'] = { $in: audience_country };
      }

      if (audience_age && audience_age !== 'all') {
        let queryValues = [];
        let brackets = ['18-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65'];

        brackets.forEach((bracket) => {
          let split = bracket.split('-');
          let minValue = Number(split[0]);
          let maxValue = Number(split[1]);
          if (minValue >= audience_age.min && maxValue <= audience_age.max) {
            queryValues.push(bracket);
          }
        });

        query['information.audience.age'] = { $in: queryValues };
      }

      console.log('ACCOUNTS_TEAMATTACK', query);
      return SocialAccounts.find(query).fetch();
    },
  },
  TeamAttack: {
    owner: (account) => {
      let user = Meteor.users.findOne({ _id: account.owner }, { fields: { services: 0 } });
      return user;
    },
    members: (team) => {
      if (!team.members || team.members.length === 0) {
        return [];
      }
      let members = SocialAccounts.find({
        _id: { $in: team.members }
      }, { fields: { connection: 0 } }).fetch();
      return members;
    }
  }
};
