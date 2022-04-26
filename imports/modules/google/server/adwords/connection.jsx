import Adwords from 'node-adwords';

let AdWordsConnection = function (key, secret) {
  let connection = {
    developerToken: Meteor.settings.private.networks.google.AdWordsToken, //your adwords developerToken
    userAgent: 'IBOL', //any company name
    clientCustomerId: '856-177-2452',//'530-908-7582', //the Adwords Account id (e.g. 123-123-123)
    client_id: '666001639290-4ockfbrs6nruqfds6jkugk1g8mctffe2.apps.googleusercontent.com', //this is the api console client_id
    client_secret: 'xmMAWuSkSv99ENIjVCHNTUf9',
    access_token: secret,
    refresh_token: secret
  };
  //console.log("ADWORDS_CONNECTION", connection);
  return new Adwords.AdwordsUser(connection);
};

export default AdWordsConnection;
