var google = require('googleapis');

let GoogleConnection = function (token) {
  var plus = google.plus('v1');
  var OAuth2 = google.auth.OAuth2;
  var oauth2Client = new OAuth2(
    '666001639290-4ockfbrs6nruqfds6jkugk1g8mctffe2.apps.googleusercontent.com',
    'xmMAWuSkSv99ENIjVCHNTUf9',
    'http://localhost:3000'
  );
  oauth2Client.setCredentials({
    access_token: token,
  });
  google.options({
    auth: oauth2Client
  });
  return {
    library: plus,
    oauth: oauth2Client
  };
};

export default GoogleConnection;
