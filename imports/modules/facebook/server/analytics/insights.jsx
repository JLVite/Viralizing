import FacebookConnection from '../connection';

// Analytics
Meteor.methods({
  'insights': async function (pageID, callback) {
    let account = SocialAccounts.findOne({ _id: pageID });
    let connection = account.connection;
    let client = FacebookConnection(connection.accessToken);
    const fbID = connection.id;
    let arr = ['page_positive_feedback_by_type', 'page_impressions', 'page_impressions_viral',
      'page_views_total', 'page_content_activity_by_action_type_unique', 'page_fans'
    ];
    if (client) {
      return await client.api(`${fbID}/insights?metric=${arr.join(',')}&date_preset=today`);
    }
  }
});
