import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-adCreative-read': function (accountID, adCreativeID) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adCreativeID}/`, { fields: ['account_id', 'actor_id', 'body', 'branded_content_sponsor_page_id', 'call_to_action_type', 'id', 'image_crops', 'image_hash', 'image_url', 'link_url', 'name', 'adlabels', 'applink_treatment', 'object_id', 'object_story_id', 'object_type'] });
    return res;
  }
});
