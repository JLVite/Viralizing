import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-adAccounts-read': function (accountID, adAccountID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    if (adAccountID.split('_').length === 1) {
      adAccountID = 'act_' + adAccountID;
    }

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccountID}/`, { fields: ['business_name', 'account_id', 'account_status', 'business', 'balance', 'business_city', 'business_country_code', 'business_state', 'business_street', 'business_street2', 'business_zip', 'can_create_brand_lift_study', 'capabilities', 'created_time', 'currency', 'disable_reason', 'end_advertiser', 'end_advertiser_name', 'failed_delivery_checks', 'funding_source', 'funding_source_details', 'has_migrated_permissions', 'id', 'age', 'amount_spent'] });
    return res;
  }
});
