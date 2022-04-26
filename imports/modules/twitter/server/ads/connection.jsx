import TwitterAdsAPI from "twitter-ads";

let TwitterConnection = function (key, secret) {
    //console.log("TWITTER_ADS_Connection", key, secret);
    return new TwitterAdsAPI({
        consumer_key: Meteor.settings.private.networks.twitter.consumerKey,
        consumer_secret: Meteor.settings.private.networks.twitter.secret,
        access_token: key,
        access_token_secret: secret,
        sandbox: true, // defaults to true
        api_version: '2'
    });
};

export default TwitterConnection;