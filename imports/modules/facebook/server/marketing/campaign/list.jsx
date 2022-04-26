import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-campaigns-list': function (accountID, adAccount) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccount}/campaigns`, { fields: ['configured_status', 'effective_status', 'status', 'start_time', 'stop_time', 'updated_time', 'created_time', 'spend_cap', 'objective', 'buying_type', 'name'] });
    return res.data;
  }
});
