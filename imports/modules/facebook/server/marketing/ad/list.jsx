import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-ads-list': function (accountID, adAccount) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccount}/ads`, { fields: ['account_id', 'actor_id', 'adlabels', 'body', 'title', 'call_to_action_type', 'id', 'image_crops', 'image_hash', 'image_url', 'link_og_id', 'link_url'] });
    return res.data;
  }
});
