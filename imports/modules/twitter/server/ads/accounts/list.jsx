import TwitterConnection from "../connection";
import {Meteor} from "meteor/meteor";

Meteor.methods({
    "twt-ads-accounts-list": function (accountID) {
        let account = SocialAccounts.findOne({_id: accountID});
        let connection = account.connection;
        let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

        Twitter.get(`accounts`, {}, function(err,res){
            console.log("ACOCUNTS", err,res);
        });

        let client = Meteor.wrapAsync(Twitter.get, Facebook);
        try{
            return client(`accounts`);
        }catch(e){
            //console.log("ERROR", e);
            return e
        }
    }
});