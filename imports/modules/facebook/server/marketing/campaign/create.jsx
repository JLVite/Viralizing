import FacebookConnection from '../../connection';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'fb-marketing-campaign-create': function (accountID, adAccount, data) {
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    let campaign = {
      name: data.name,
      adlabels: [],
      budget_rebalance_flag: true,
      buying_type: data.buyingType, //AUCTION OR RESERVED, FIXED_CPM
      promoted_object: null, //OBJECT ID
      spend_cap: Number(data.spendCap) * 100,
      status: 'PAUSED', //PAUSED OR ACTIVE
      objective: data.objective //APP_INSTALLS, BRAND_AWARENESS, CONVERSIONS, EVENT_RESPONSES, LEAD_GENERATION, LINK_CLICKS, LOCAL_AWARENESS, OFFER_CLAIMS, PAGE_LIKES, POST_ENGAGEMENT, PRODUCT_CATALOG_SALES, REACH, VIDEO_VIEWS
    };

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    try {
      return client(`${adAccount}/campaigns`, 'post', campaign);
    } catch (e) {
      console.log('ERROR', e);
      return { error: JSON.parse(e.message).error.error_user_msg };
    }
  }
});
