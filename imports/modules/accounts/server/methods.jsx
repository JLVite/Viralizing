import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import Schema from '../../../server/schemas/accounts/schema';
import Settings from '../../../settings';

Meteor.methods({
  'profile-create': function (user, connection) {
    //console.log("PROFILE_CREATE_USER", user);
    //console.log("PROFILE_CREAATE_CONNECTION",connection);
    /*
     let passPhrase = Meteor.settings.private.aes.passPhrase;

     let encriptValues = function (serviceData) {
     console.log("ENCRIPTION_PROCESS",Object.keys(serviceData));
     Object.keys(serviceData).forEach(function(key){
     let value = serviceData[key];
     console.log("PREVIOUS_VALUE [" + key + "]: ", value);
     value = CryptoJS.AES.encrypt(value.toString(), passPhrase).toString();
     console.log("ENCRYPTED_VALUE [" + key + "]: ", value);
     serviceData[key] = value;
     });
     };

     encriptValues(connection.serviceData);
     */
    let newProfile = Object.assign({}, Schema, {
      owner: user._id,
      manager: user._id,
      connection: connection.serviceData,
      network: connection.serviceName
    });

    console.log(newProfile.network);

    switch (newProfile.network) {
      case 'facebook':
        newProfile.information.name = newProfile.connection.first_name;
        newProfile.information.lastName = newProfile.connection.last_name;
        newProfile.information.avatar = 'https://graph.facebook.com/' + newProfile.connection.id + '/picture?type=large';
        newProfile.information.gender = newProfile.connection.gender;
        //newProfile.information.languages = [newProfile.connection.locale.split("_")[0]];
        break;
      case 'twitter':
        newProfile.information.name = newProfile.connection.screenName;
        newProfile.information.avatar = newProfile.connection.profile_image_url_https;
        newProfile.information.languages = [newProfile.connection.lang];
        break;
      case 'instagram':
        newProfile.information.name = newProfile.connection.full_name;
        newProfile.information.avatar = newProfile.connection.profile_picture;
        break;
      case 'google':
        newProfile.information.name = newProfile.connection.given_name;
        newProfile.information.lastName = newProfile.connection.family_name;
        newProfile.information.avatar = newProfile.connection.picture;

        break;
      default:
        throw new Meteor.Error(500, 'Wrong Network');
    }

    let profileID = SocialAccounts.insert(newProfile);
    newProfile._id = profileID;

    if (newProfile.network === 'facebook') {
      Meteor.call('autocreate-pages-related', profileID);
    }

    Meteor.call('profile-get-stats', newProfile);

    return profileID;
  },
  'profiles-save': function (profile) {
    const user = Meteor.user();
    let dbProfile = SocialAccounts.findOne({ _id: profile._id });
    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === '__typename') {
          delete obj[k];
        }
        if (obj[k] && typeof obj[k] === 'object') {
          removeTypeNames(obj[k]);
        }
      });
    };

    //TODO: Change this...
    profile.owner = profile.owner._id;

    profile.manager = profile.manager._id;

    profile.shares = profile.shares.map((a) => a._id);
    removeTypeNames(profile);
    return SocialAccounts.update(profile._id, { $set: Object.assign({}, dbProfile, profile) });
  },
  'profiles-mark-delete': function (profile) {
    const user = Meteor.user();
    profile = SocialAccounts.findOne({ _id: profile._id });
    if (profile.owner !== user._id) {
      throw new Meteor.Error(403, 'Only the owner can delete an account');
    }
    let accountName = (profile.information.name || '') + ' ' + (profile.information.lastName || '');
    let userName = user.profile.name;

    SocialAccounts.update(profile._id, { $set: { delete: true, active: false } });

    this.unblock();
    Email.send({
      from: 'no-reply@viralizing.me',
      to: Settings.support.email,
      subject: 'Eliminación de Cuenta [' + (accountName === ' ' ? '' : accountName + ' - ') + profile.network + ']',
      html: (userName || 'El usuario (' + user.emails[0].address + ')') + ' desea borrar la cuenta ' + accountName + ' (' + profile._id + ')'
    });
  },
  'profiles-restore-delete': function (profile) {
    SocialAccounts.update(profile._id, { $set: { delete: true, active: false } });
  },
  'profile-get-stats': function (profile) {
    let screenName;
    let method;
    if (!profile.connection) {
      profile = SocialAccounts.findOne({ _id: profile._id });
    }
    console.log('CALL STATISTICS');
    switch (profile.network) {
      case 'facebook':
        method = 'facebook-account-stats';
        screenName = profile.connection.id;
        break;
      case 'twitter':
        method = 'twitter-account-stats';
        screenName = profile.connection.screenName;
        break;
      case 'instagram':
        method = 'instagram-account-stats';
        screenName = profile.connection.username;
        break;
      case 'google':
        return;
      default:
        throw new Meteor.Error(500, 'Unknown Network');
    }
    console.log('SCREEN-NAME', screenName);
    let statistics = Meteor.call(method, screenName, profile);
    statistics.updated = new Date();
    console.log('NEW STATISTICS', statistics);

    return SocialAccounts.update(profile._id, { $set: { statistics } });
  },
  'connect-facebook-pages': function (accountID, pages, groups) {
    let user = Meteor.user();
    let pageData = Meteor.call('facebook-pages-list', accountID);
    let groupData = Meteor.call('facebook-groups-list', accountID);
    let group = groupData.data.filter((group) => groups.indexOf(group.id) !== -1);
    let data = pageData.data.filter((page) => pages.indexOf(page.id) !== -1);
    let pageIDs = [];
    group.forEach((group) => {
      group.parent = accountID;
      group.accessToken = group.access_token;
      let newProfile = Object.assign({}, Schema, {
        owner: user._id,
        manager: user._id,
        connection: group,
        network: 'facebook'
      });
      newProfile.information.name = group.name;
      newProfile.information.avatar = 'https://www.tryviews.com/wp-content/uploads/2017/08/Buy-Facebook-Group-Joins.png';
      newProfile.type = 'group';
      let matchGroup = SocialAccounts.findOne({ 'connection.id': group.id });
      if (matchGroup) {
        console.log('Group Already Exists', group.id);
        pageIDs.push({
          status: 'Error',
          fbId: group.id,
          name: group.name
        });
      } else {
        console.log('ADDING-NEW-GROUP', newProfile);
        let profileID = SocialAccounts.insert(newProfile);
        newProfile._id = profileID;

        // Meteor.call("profile-get-stats", newProfile);
        pageIDs.push({
          status: 'Success',
          id: profileID,
          fbId: group.id,
          name: group.name
        });
      }
    });
    console.log('PAGE-ID', pageIDs);
    data.forEach((page) => {
      page.parent = accountID;
      page.accessToken = page.access_token;
      let newProfile = Object.assign({}, Schema, {
        owner: user._id,
        manager: user._id,
        connection: page,
        network: 'facebook'
      });
      newProfile.information.name = page.name;
      newProfile.information.avatar = 'https://graph.facebook.com/' + newProfile.connection.id + '/picture?type=large';
      newProfile.type = 'page';
      let matchPage = SocialAccounts.findOne({ 'connection.id': page.id });
      if (matchPage) {
        console.log('Page Already Exists', page.id);
        pageIDs.push({
          status: 'Error',
          fbId: page.id,
          name: page.name
        });
      } else {
        let profileID = SocialAccounts.insert(newProfile);
        newProfile._id = profileID;

        // Meteor.call("profile-get-stats", newProfile);
        pageIDs.push({
          status: 'Success',
          id: profileID,
          fbId: page.id,
          name: page.name
        });
      }
    });

    return pageIDs;
  },
  'account-category-invite-proposal': function (accountID, data) {
    //console.log("account-category-invite-proposal", accountID, data);

    let user = Meteor.user();
    let userName = user.profile.name;

    let action = 'Categoria';
    let proposal = data.category;
    if (data.type === 'specialty') {
      action = 'Especialidad';
      proposal = (data.category ? data.category : 'Sin Categoria') + ' -> ' + data.specialty;
    }

    this.unblock();
    let subject = 'Se ha sugerido una nueva ' + action;
    let html = ((userName ? userName : 'El usuario') + ' (' + user.emails[0].address + ' - ' + user._id + ')') + ' ha sugerido una nueva ' + action + ' (' + proposal + ')';

    Email.send({
      from: Settings.email.noReply,
      to: 'hello@viralizing.me',
      subject,
      html
    });

  },
  'account-target-objective-proposal': function (accountID, data) {
    //console.log("account-target-objective-proposal", accountID, data);

    let user = Meteor.user();
    let userName = user.profile.name;

    let action = 'Meta';
    let proposal = data.objective;

    this.unblock();
    let subject = 'Se ha sugerido una nueva ' + action;
    let html = ((userName ? userName : 'El usuario') + ' (' + user.emails[0].address + ' - ' + user._id + ')') + ' ha sugerido una nueva ' + action + ' (' + proposal + ')';

    Email.send({
      from: Settings.email.noReply,
      to: 'hello@viralizing.me',
      subject,
      html
    });

  },
  'autocreate-pages-related': function (profileID) {
    let fbPages = Meteor.call('facebook-pages-list', profileID).data;
    let pageIDs = fbPages.map(page => page.id);
    let fbGroups = Meteor.call('facebook-groups-list', profileID).data;
    let groupIDs = fbGroups.map(group => group.id);
    Meteor.call('connect-facebook-pages', profileID, pageIDs, groupIDs);
  },
});

