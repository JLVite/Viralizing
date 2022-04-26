import TwitterConnection from "../connection";
import {Meteor} from "meteor/meteor";

Meteor.methods({
    "twt-ads-campaign-list": function (accountID, adAccount, campaignID) {
        let account = SocialAccounts.findOne({_id: accountID});
        let connection = account.connection;
        let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

        let campaign={};

        let client = Meteor.wrapAsync(Twitter.get, Facebook);
        try{
            return client(`${adAccount}/campaigns`, campaign);
        }catch(e){
            //console.log("ERROR", e);
            return e
        }
    }
});