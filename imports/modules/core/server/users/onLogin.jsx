import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Schema from './schema';
import md5 from 'md5';
import uuidv4 from 'uuid/v4';

Accounts.onLogin(function (loginObj) {

  let currentUser = loginObj.user;
  let dbUser = Meteor.users.findOne({ _id: currentUser._id });
  let currentProfile = currentUser.profile;

  let profile = Object.assign({}, Schema.profile, currentProfile);
  profile.lastSeen = new Date();

  if (!profile.avatar) {
    profile.avatar = 'https://www.gravatar.com/avatar/' + md5(currentUser.emails[0].address);
  }

  if (loginObj.type === 'resume') {
    if (profile.loginCount) {
      profile.loginCount++;
    } else {
      profile.loginCount = 1;
    }
  }

  let user = Object.assign({}, Schema, dbUser, { profile });

  if(!user.shareCode){
    user.shareCode = uuidv4();
  }

  Meteor.users.update(user._id, user);
  if (!currentUser.stripe.id) {
    const res = Meteor.call('stripe_customers_create', currentUser, {});
    console.log('ON_LOGIN-STRIPE', res);
  }
  return true;
});
