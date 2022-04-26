import instagram from 'instagramapi';

let InstagramConnection = function (token) {
  let client = instagram.instagram();
  client.use({
    access_token: token
  });
  return client;
};

export default InstagramConnection;
