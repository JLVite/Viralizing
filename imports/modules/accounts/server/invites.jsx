import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import Schema from '../../../server/schemas/account-invites/schema';
import Settings from '../../../settings';

Meteor.methods({
  'account-invite-create': function (invite) {
    const user = Meteor.user();
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

    removeTypeNames(invite);

    let newInvite = Object.assign({}, Schema, {
      owner: user._id
    }, invite);

    if (!newInvite.account) {
      throw new Meteor.Error(500, 'No Account sent on Invite');
    }

    let newInviteID = SocialAccountsInvites.insert(newInvite);
    newInvite._id = newInviteID;

    Meteor.call('account-invite-send-email', newInvite);

    return newInviteID;
  },
  'account-invite-delete': function (invite, accountID) {
    let dbInvite = SocialAccountsInvites.findOne({ _id: invite._id });

    if (dbInvite.account !== accountID) {
      throw new Meteor.Error(403, 'Invite doesn\'t belong to account');
    }

    return SocialAccountsInvites.remove({ _id: invite._id });
  },
  'account-invite-send-email': function (invite) {
    let account = SocialAccounts.findOne({ _id: invite.account });
    let user = Meteor.users.findOne({ _id: account.owner }, { fields: { services: 0 } });

    let userName = user.profile.name;
    let accountName = (account.information.name || '') + ' ' + (account.information.lastName || '');

    let dbUser = Accounts.findUserByEmail(invite.email);

    if (dbUser) {
      Meteor.call('notifications-create', dbUser._id, {
        type: 'info',
        title: 'Nueva Invitación',
        description: 'Has sido invitado a administrar la cuenta de ' + accountName,
        url: 'http://localhost:3000/accounts/invite/' + invite._id
      });
    }

    this.unblock();
    let subject = 'Ha sido invitado a administrar una cuenta';
    let html = (userName || 'El usuario (' + user.emails[0].address + ')') + ' te ha invitado a administrar la cuenta de ' + accountName + '<br> <a href=\'http://localhost:3000/accounts/invite/' + invite._id + '\'>Ver Invitación</a>';
    if (invite.type === 'share') {
      subject = 'Ha sido invitado a administrar una cuenta';
      html = (userName || 'El usuario (' + user.emails[0].address + ')') + ' te ha invitado a administrar la cuenta de ' + accountName + '<br> <a href=\'http://localhost:3000/accounts/invite/' + invite._id + '\'>Ver Invitación</a>';
    }
    Email.send({
      from: Settings.email.noReply,
      to: invite.email,
      subject,
      html
    });

    return SocialAccountsInvites.update({ _id: invite._id }, {
      $set: {
        status: 'sent',
        sent: new Date()
      }
    });
  },
  'account-invite-update-status': function (invite, status) {
    //console.log("INVITE_UPDATE", status);
    let user = Meteor.user();
    if (status === 'reject') {
      return SocialAccountsInvites.update({ _id: invite._id }, {
        $set: {
          status: 'rejected'
        }
      });
    }
    if (status === 'accept') {
      let query = {};
      if (invite.type === 'share') {
        let account = SocialAccounts.findOne({ _id: invite.account._id });
        let shares = account.shares;
        shares.push(user._id);
        query = { shares };
      }
      if (invite.type === 'manager') {
        query = {
          manager: user._id
        };
      }
      SocialAccounts.update({ _id: invite.account._id }, { $set: query });
      Meteor.call('account-invite-delete', invite, invite.account._id);
    }
  }
});
