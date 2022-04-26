import AdWordsConnection from '../connection';
import { Meteor } from 'meteor/meteor';
import XML2JS from 'xml2js';

Meteor.methods({
  'google-adwords-adGroup-create': function (accountID, data) {
    //console.log("google-adwords-adGroup-create", accountID);
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let adGroupService = AdWords.getService('AdGroupService', 'v201708');

    let adGroup = {
      operator: 'ADD',
      operand: {
        name: 'Test AdGroup ' + moment(new Date()).format('DD/MM/YYYY hh:mm:ss A'),
        biddingStrategyConfiguration: {
          biddingStrategyType: 'ENHANCED_CPC',
          biddingStrategySource: 'CAMPAIGN'
        },
        contentBidCriterionTypeGroup: 'KEYWORD',
        campaignId: 934093898,
        /*campaign: {
            campaignId: "934093898"
        },
        status: "PAUSED",*/
        urlCustomParameters: {
          parameters: [],
          doReplace: false
        }/*,
                settings: {
                    "xsi:type": "TargetingSetting",
                    details: [
                        {
                            criterionTypeGroup: "KEYWORD",
                            targetAll: true
                        }
                    ]
                }*/
      }
    };

    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/

    //let res= await campaignService.get({serviceSelector});

    let adGroupServiceClient = Meteor.wrapAsync(adGroupService.mutate, adGroupService);

    try {
      let adGroupRes = adGroupServiceClient({ operations: adGroup });
      //console.log("SYNC_RES", adGroupRes);
      return adGroupRes;
    } catch (e) {
      //console.log("ERROR", typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body)['soap:Envelope']['soap:Body'][0]['soap:Fault'][0].faultstring[0];
    }
  }
});
