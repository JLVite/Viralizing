import '../imports/server/bundle.jsx';
import '../imports/modules/bundles/server.jsx';

//23xcuCrdu2RP9EgvUccf9vBL9
//aHR0cHM6Ly90d2l0dGVyLmNvbS9yZWdpbmFiaXRh
//aHR0cHM6Ly90d2l0dGVyLmNvbS9jYW1pY29ydG14P2xhbmc9ZW4
//aHR0cHM6Ly9zY29udGVudC5mbWV4Ny0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTc5OTIyNDBfMjI4NDU0MDY2ODQzNzIxMV81NjE2MDE5NTc4NjIwOTMwMjg4X24uanBnP29oPTVjZDY2MjYyMDA2MjkwMzY0MDhkZDFiZWZjNzk5YjQxJm9lPTU5OUM2NTYy

Meteor.startup(function () {
  SyncedCron.start();

  Meteor.users._ensureIndex({
    'services.facebook.id': 1,
    'services.instagram.id': 1,
    'services.google.id': 1,
    'services.twitter.id': 1
  }, {
    name: 'usersIndex'
  });
  //Teams._ensureIndex({ userId: 1 });
  //Collection.rawCollection.createIndex({ userId: 1 });
  SocialAccounts._ensureIndex({
    '_id': 1,
    'network': 1,
    'manager': 1,
    'owner': 1,
    'shares': 1,
    'connection.id': 1,
    'information.gender': 1,
    'information.birthDate': 1,
    'information.country': 1,
    'audience.age': 1,
    'audience.gender': 1,
    'audience.nrssg': 1,
    'audience.countries': 1,
    'audience.cities': 1,
    'audience.languages': 1,
    'statistics.followers': 1,
    'pricing.post': 1,
    'pricing.photos.profile': 1,
    'pricing.photos.cover': 1,
    'pricing.noPost.hour': 1,
    'pricing.noPost.day': 1,
    'pricing.share': 1
  }, {
    name: 'accountsIndex'
  });

  Campaigns._ensureIndex({
    '_id': 1,
    'owner': 1,
    'manager': 1,
    'status': 1,
    'information.dateStart': 1,
    'information.dateEnd': 1
  }, {
    name: 'campaignsIndex'
  });

  TeamAttack._ensureIndex({
    '_id': 1,
    'owner': 1,
    'members': 1
  }, {
    name: 'teamAttackIndex'
  });

  Posts._ensureIndex({
    '_id': 1,
    'status': 1,
    'type': 1,
    'date': 1,
    'campaign': 1,
    'announcement': 1,
    'isPaid': 1,
    'account': 1,
    'owner': 1
  }, {
    name: 'postsIndex'
  });

  let services = Meteor.settings.private.networks;

  let configure = function () {
    if (services) {
      for (let service in services) {

        ServiceConfiguration.configurations.upsert({ service: service }, {
          $set: Object.assign({}, services[service], { 'loginStyle': 'popup' })
        });
      }
    }
  };

  configure();
});
