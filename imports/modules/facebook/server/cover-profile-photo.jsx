import FacebookConnection from './connection';

let request = require('request').defaults({ encoding: null });

Meteor.methods({
  /*coverURL = idPhoto already uploaded*/
  /* Meteor.call('facebook-update-cover-photo','pageID',IDphoto,(err,res)=>{console.log(err,res)}); */
  'facebook-update-cover-photo': function (pageID, coverURL, callback) {
    let account = SocialAccounts.findOne({ _id: pageID });
    let connection = account.connection;
    console.log('Connetition Data', connection);
    let client = FacebookConnection(connection.accessToken);
    const fbID = connection.id;

    if (client) {
      client.api(`${fbID}/albums`, { fields: ['name', 'id'] }, function (res) {
        console.log('album', res);
        const albumID = res.data.filter((album) => album.name === 'Cover Photos')[0].id;
        console.log('Cover Photos ID', albumID);
        client.api(`${albumID}/photos`, 'post', {
          url: coverURL,
        }, function (res) {
          console.log('Cover Response', res);
        });
      });
      return client.api('/' + fbID, 'post', {
        cover: coverURL,
      }, function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }
        console.log('success: ' + res.success);
        if (callback) {
          callback();
        }
      });
    }
  },
  /*coverURL = page URL*/
  /* Meteor.call('facebook-update-profile-photo','pageID','coverURL',(err,res)=>{console.log(err,res)}); */
  'facebook-update-profile-photo': function (pageID, coverURL, callback) {
    let account = SocialAccounts.findOne({ _id: pageID });
    let connection = account.connection;
    console.log('Connetition Data', connection);
    let client = FacebookConnection(connection.accessToken);
    const fbID = connection.id;

    if (client) {
      client.api(`${fbID}/albums`, { fields: ['name', 'id'] }, function (res) {
        console.log('album', res);
        const albumID = res.data.filter((album) => album.name === 'Profile Pictures')[0].id;
        console.log('Cover Photos ID', albumID);
        client.api(`${albumID}/photos`, 'post', {
          url: coverURL,
        }, function (res) {
          console.log('Cover Response', res);
        });
      });
      return client.api('/' + fbID + '/picture', 'post', {
        picture: coverURL,
      }, function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }
        console.log('success: ' + res.success);
        if (callback) {
          callback();
        }
      });
    }
  },
  'facebook-post-group': function (connection, groupID, message, callback) {
    // let connection = FacebookConnection(connection.accessToken);

    if (connection) {
      let client = Meteor.wrapAsync(connection.napi, connection);
      let firstAlbum = client(`${groupID}/groups`);
      console.log('FIRST-ALBUM', firstAlbum);
      return client(`${firstAlbum}/feed`, 'post', {
        message: message
      }, function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }
        console.log('success: ' + res.success);
        if (callback) {
          callback();
        }
      });

    }
  },
});
