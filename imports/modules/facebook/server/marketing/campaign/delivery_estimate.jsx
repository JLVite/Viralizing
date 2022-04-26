import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-campaigns-delivery-estimate': function (accountID, AdAccount, data) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    data.targeting_spec.user_device = data.targeting_spec.user_device.filter(e => e);
    data.targeting_spec.user_os = data.targeting_spec.user_os.filter(e => e);
    console.log('fb-marketing-campaigns-delivery_estimate', accountID, AdAccount, data);

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${AdAccount}/delivery_estimate`, data);

    return res;
  }
});
