import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import md5 from 'md5';
import Schema from './schema';

Meteor.methods({
  users_create_account: function (email, password, plan, source) {
    let defaultUser = Schema;

    if (source && source.type) {
      defaultUser.source = source;
    }

    let accountData = Accounts.createUser({
      email: email,
      password: password,
      profile: defaultUser.profile
    });

    /*
     if(typeof(accountData)==="string"){
     console.log("Create Stripe ID");
     Meteor.call('payments_customer_create',accountData,plan);
     }*/

    return accountData;
  },
  users_update_profile: function (profile) {
    Meteor.users.update(Meteor.userId(), { $set: { profile: profile } });
    return {
      stauts: 'success'
    };
  },
  users_change_password: function (userID, password) {
    return false;
    let change = Accounts.setPassword(userID, password);

    return {
      stauts: 'success'
    };
  },
  users_check_password: function (digest) {
    check(digest, String);

    if (this.userId) {
      let user = Meteor.user();
      let password = { digest: digest, algorithm: 'sha-256' };
      let result = Accounts._checkPassword(user, password);
      return result.error == null;
    } else {
      return false;
    }
  },
  'users-get-flags': function () {
    let user = Meteor.user();
    let userData = Meteor.users.findOne({ _id: user._id }, { fields: { flags: 1 } });
    return userData.flags;
  },
  'users-update-flag': function (flag, value) {
    check(flag, String);
    check(value, Boolean);
    let user = Meteor.user();
    if (!user) {
      throw new Meteor.Error(500, 'Use Doesn\'t Exist');
    }
    let flags = Object.assign({}, user.flags);
    flags[flag] = value;
    Meteor.users.update({ _id: user._id }, { $set: { flags } });
  },
  'users-update-modal-profile': function (data) {
    let user = Meteor.user();
    if (!user) {
      throw new Meteor.Error(500, 'Use Doesn\'t Exist');
    }
    let profile = Object.assign({}, user.profile, data);
    Meteor.users.update({ _id: user._id }, { $set: { profile } });
  }
});
