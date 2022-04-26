import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-images-create': function (accountID, adAccountID, imageData) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let Image = {
      bytes: imageData
    };
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccountID}/adimages`, 'post', Image);
    return res;
  }
});
