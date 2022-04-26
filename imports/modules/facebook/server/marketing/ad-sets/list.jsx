import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-adsets-list': function (accountID, adAccount) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccount}/adsets`, { fields: ['name', 'account_id', 'adlabels', 'adset_schedule', 'attribution_spec', 'bid_amount', 'bid_info', 'billing_event', 'budget_remaining', 'campaign', 'campaign_id', 'configured_status', 'created_time', 'creative_sequence', 'daily_budget', 'effective_status', 'end_time', 'frequency_cap', 'frequency_cap_reset_period', 'frequency_control_specs', 'id', 'is_autobid', 'is_average_price_pacing', 'lifetime_budget', 'lifetime_frequency_cap', 'lifetime_imps', 'optimization_goal', 'pacing_type', 'promoted_object', 'recommendations', 'recurring_budget_semantics', 'rf_prediction_id', 'rtb_flag', 'source_adset', 'source_adset_id', 'start_time', 'status', 'targeting', 'time_based_ad_rotation_id_blocks', 'time_based_ad_rotation_intervals', 'updated_time'] });
    return res.data;
  }
});
