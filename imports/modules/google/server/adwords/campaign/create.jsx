import AdWordsConnection from '../connection';
import { Meteor } from 'meteor/meteor';
import Adwords from 'node-adwords';
import XML2JS from 'xml2js';

Meteor.methods({
  'google-adwords-campaign-create': function (accountID, data) {
    console.log('google-adwords-campaign-create', accountID);
    let account = SocialAccounts.findOne({ _id: accountID });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let campaignService = AdWords.getService('CampaignService', 'v201708');
    let budgetService = AdWords.getService('BudgetService', 'v201708');

    let budget = {
      operator: 'ADD',
      operand: {
        name: 'Test Budget ' + moment(new Date()).format('DD/MM/YYYY hh:mm:ss A'),
        amount: {
          microAmount: '50000000'
        }
      }
    };

    let campaign = {
      operator: 'ADD',
      operand: {
        name: 'Test Campaign ' + moment(new Date()).format('DD/MM/YYYY hh:mm:ss A'),
        status: 'PAUSED',
        startDate: '20170921',
        endDate: '20371230',
        budget: {
          budgetId: ''
        },
        settings: {
          'xsi:type': 'GeoTargetTypeSetting',
          positiveGeoTargetType: 'DONT_CARE'
        },
        advertisingChannelType: 'SEARCH',
        networkSetting: {
          targetGoogleSearch: true,
          targetSearchNetwork: true,
          targetContentNetwork: false
        },
        biddingStrategyConfiguration: {
          biddingScheme: {
            'xsi:type': 'ManualCpcBiddingScheme',
            enhancedCpcEnabled: false
          }
        }
      }
    };

    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/

    //let res= await campaignService.get({serviceSelector});

    let budgetClient = Meteor.wrapAsync(budgetService.mutate, budgetService);
    let campaigClient = Meteor.wrapAsync(campaignService.mutate, campaignService);

    try {
      let budgetRes = budgetClient({ operations: budget });
      campaign.operand.budget.budgetId = budgetRes.value[0].budgetId;
      let campaignRes = campaigClient({ operations: campaign });
      console.log('SYNC_RES', campaignRes);
      return campaignRes;
    } catch (e) {
      console.log('ERROR', typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body)['soap:Envelope']['soap:Body'][0]['soap:Fault'][0].faultstring[0];
    }
  }
});
