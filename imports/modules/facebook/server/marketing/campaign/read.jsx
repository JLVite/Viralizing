import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-campaigns-read': function (accountID, campaignID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    console.log('fb-marketing-campaigns-read', accountID, campaignID);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    Facebook.napi(`${campaignID}/`, { fields: ['account_id', 'created_time', 'configured_status', 'can_use_spend_cap', 'can_create_brand_lift_study', 'buying_type', 'budget_rebalance_flag', 'boosted_object_id', 'effective_status', 'name', 'source_campaign', 'status', 'updated_time', 'start_time', 'stop_time', 'ad_studies', 'ads', 'spend_cap', 'objective', 'adsets'] }, function (err, res) {
      console.log('FACEBOOO', err, res);
    });
    let res = client(`${campaignID}/`, { fields: ['account_id', 'created_time', 'configured_status', 'can_use_spend_cap', 'can_create_brand_lift_study', 'buying_type', 'budget_rebalance_flag', 'boosted_object_id', 'effective_status', 'name', 'source_campaign', 'status', 'updated_time', 'start_time', 'stop_time', 'ad_studies', 'ads', 'spend_cap', 'objective', 'adsets'] });

    return res;
  }
});
