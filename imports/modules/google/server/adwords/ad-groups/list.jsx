import AdWordsConnection from '../connection';
import { Meteor } from 'meteor/meteor';
import Adwords from 'node-adwords';
import XML2JS from 'xml2js';

Meteor.methods({
  'google-adwords-adGroup-list': function (accountID) {
    console.log('google-adwords-adGroup-list', accountID);
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let adGroupService = AdWords.getService('AdGroupService', 'v201708');

    let serviceSelector = {
      fields: ['Id', 'Name', 'Status', 'AdGroupType', 'CampaignId', 'CampaignName'],
      ordering: [{ field: 'Name', sortOrder: 'ASCENDING' }],
      paging: { startIndex: 0, numberResults: 50 }
    };

    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/

    //let res= await campaignService.get({serviceSelector});

    console.log('adGroupService', adGroupService);

    let client = Meteor.wrapAsync(adGroupService.get, adGroupService);

    try {
      let res = client({ serviceSelector });
      console.log('SYNC_RES', res);
      return res;
    } catch (e) {
      console.log('ERROR', typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body);
    }
  }
});
