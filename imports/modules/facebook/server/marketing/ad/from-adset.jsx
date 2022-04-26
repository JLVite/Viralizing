import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-ads-from-adset': function (accountID, adSetID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adSetID}/ads`, { fields: ['account_id', 'title', 'actor_id', 'body', 'branded_content_sponsor_page_id', 'call_to_action_type', 'id', 'image_crops', 'image_hash', 'image_url', 'link_url', 'name', 'adlabels', 'applink_treatment', 'object_id', 'object_story_id', 'object_type', 'configured_status', 'effective_status', 'status'] });
    return res;
  }
});
