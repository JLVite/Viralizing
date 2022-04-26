import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-ads-read': function (accountID, adID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adID}/`, { fields: ['account_id', 'campaign', 'campaign_id', 'ad_review_feedback', 'adlabels', 'adset', 'adset_id', 'bid_amount', 'bid_info', 'bid_type', 'configured_status', 'conversion_specs', 'created_time', 'creative', 'effective_status', 'id', 'adcreatives', 'name', 'recommendations', 'source_ad', 'source_ad_id', 'status', 'tracking_specs', 'updated_time', 'insights', 'leads'] });

    return res;
  }
});
