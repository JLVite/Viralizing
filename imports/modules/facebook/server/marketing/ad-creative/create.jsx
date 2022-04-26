import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-adCreative-create': function (accountID, adAccount, AdCreative) {
    console.log('fb-marketing-adCreative-create', accountID, adAccount);
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    /*let AdCreative = {
        title: "Test AdCreative " + moment().format("DD/MM/YYYY h:m"),
        account_id: adAccount,
        body: "Another! This is a test creative body",
        image_url: "https://ibol-website.s3.amazonaws.com/wp-content//uploads/2017/02/z0nvqfroqwa-denys-nevozhai.jpg",
        link_url: "https://www.facebook.com/ibolviralizing/",
        //object_id: "369756380077148",
        object_story_spec: {
            "link_data": {
                "call_to_action": {
                    "type": "SIGN_UP",
                    "value": {"link": "https://www.facebook.com/ibolviralizing/"}
                },
                "link": "https://www.facebook.com/ibolviralizing/",
                "message": "try it out"
            },
            "page_id": "369756380077148",
            "instagram_actor_id": ""
        }
    };*/
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    try {
      return res = client(`${adAccount}/adcreatives`, 'post', AdCreative);
    } catch (e) {
      return e;
    }
  }
});
