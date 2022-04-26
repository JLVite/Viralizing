import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-ads-create': function (accountID, adAccount, adSetID, creativeID, Ad) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    /*
    let Ad={
        name: "Test AdCreative "+moment().format("DD/MM/YYYY h:m"),
        adset_id:adSetID,
        creative: {creative_id:creativeID},
        status: "ACTIVE" //ACTIVE, PAUSED, DELETED, ARCHIVED
    };*/
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    try {
      return client(`${adAccount}/ads`, 'post', Ad);
    } catch (e) {
      return e;
    }
  }
});
