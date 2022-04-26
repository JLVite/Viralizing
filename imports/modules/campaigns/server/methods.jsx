import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import Settings from '../../../settings';
import CampaignsSchema from '../../../server/schemas/campaign/schema';
import InviteSchema from '../../../server/schemas/invites/schema';
import CampaingInviteSentSchema from '../../../server/schemas/campaign-invite-sent/schema';

Meteor.methods({
  'campaigns-invite-update': function (campaignsSent, status) {

    let newCampaignInviteSent = null;

    campaignsSent.map(invite => {

      newCampaignInviteSent = Object.assign({},
          invite, {status: status});

      CampaignInviteSent.update({_id:invite._id}, newCampaignInviteSent);
    })
    return newCampaignInviteSent;
  },
  'campaigns-invite-sent': function (influencer, campaign, messages) {
    const newCampaignInviteSent = Object.assign({},
      CampaingInviteSentSchema, {
        campaignId: campaign._id,
        ownerId: campaign.owner._id,
        accountId: influencer._id,
        messages,
        status: 'received',
      });

    CampaignInviteSent.insert(newCampaignInviteSent);
    return newCampaignInviteSent;
  },
  'campaigns-crate': function (data) {
    // console.log("CAMPAIGNS_CREATE_BEFORE", data);
    const user = Meteor.user();

    const newCampaign = Object.assign({}, CampaignsSchema, {
      owner: user._id,
      manager: user._id,
    });

    const {
      name, dateStart, dateEnd, brands,
    } = data;

    newCampaign.information = Object.assign({}, newCampaign.information, {
      name,
      dateStart,
      dateEnd,
      brands: brands.map(b => b._id),
    });

    // console.log("CAMPAIGNS_CREATE_INSERT", newCampaign, data);

    return Campaigns.insert(newCampaign);
  },
  'campaigns-save': function (campaign) {
    const user = Meteor.user();
    const dbCampaign = Campaigns.findOne({ _id: campaign._id });
    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach((k) => {
        if (k === '__typename') {
          delete obj[k];
        }
        if (obj[k] && typeof obj[k] === 'object') {
          removeTypeNames(obj[k]);
        }
      });
    };
    campaign.owner = campaign.owner._id;
    campaign.manager = campaign.manager._id;

    if (campaign.information.brands) {
      campaign.information.brands = campaign.information.brands.map(b => b._id);
    }

    removeTypeNames(campaign);

    return Campaigns.update(campaign._id, Object.assign({}, dbCampaign, campaign));
  },
  'invite-create': function (invite) {
    // console.log("INVITE_CREATE");
    const user = Meteor.user();
    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach((k) => {
        if (k === '__typename') {
          delete obj[k];
        }
        if (obj[k] && typeof obj[k] === 'object') {
          removeTypeNames(obj[k]);
        }
      });
    };

    const newInvite = Object.assign({}, InviteSchema, invite, {
      owner: user._id,
    });
    newInvite.campaign = newInvite.campaign._id;
    newInvite.influencers = newInvite.influencers.map(a => a._id);

    removeTypeNames(newInvite);

    return Invites.insert(newInvite);
  },
  'invite-update': function (invite) {
    const user = Meteor.user();
    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach((k) => {
        if (k === '__typename') {
          delete obj[k];
        }
        if (obj[k] && typeof obj[k] === 'object') {
          removeTypeNames(obj[k]);
        }
      });
    };

    invite.influencers = invite.influencers.map(a => a._id);
    invite.teamAttacks = invite.teamAttacks.map(a => a._id);

    removeTypeNames(invite);
    return Invites.update(invite._id, { $set: invite });
  },
  'invite-save-multiple': function (invites, campaignID) {
    const writes = [];
    invites.forEach((invite) => {
      invite.campaign = campaignID;
      writes.push(Meteor.call('invite-update', invite));
    });
    return writes;
  },
  'campaign-objective-proposal': function (campaignID, data) {
    // console.log("campaign-objective-proposal", campaignID, data);

    const user = Meteor.user();
    const userName = user.profile.name;

    const action = 'Objetivo de Campaña';
    const proposal = data.objective;

    this.unblock();
    const subject = `Se ha sugerido un nuevo ${action}`;
    const html = `${userName || 'El usuario'} (${user.emails[0].address} - ${user._id})` + ` ha sugerido un nuevo ${action}: ${proposal}.`;

    Email.send({
      from: Settings.email.noReply,
      to: 'hello@viralizing.me',
      subject,
      html,
    });
  },
  'campaign-invite-create': function (invite) {
    const user = Meteor.user();
    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach((k) => {
        if (k === '__typename') {
          delete obj[k];
        }
        if (obj[k] && typeof obj[k] === 'object') {
          removeTypeNames(obj[k]);
        }
      });
    };

    removeTypeNames(invite);

    const newInvite = Object.assign({}, InviteSchema, {
      owner: user._id,
    }, invite);
    console.log('newInvite.campaign', newInvite.campaign);

    if (!newInvite.campaign) {
      throw new Meteor.Error(500, newInvite);
    }

    const newInviteID = CampaignInvites.insert(newInvite);
    newInvite._id = newInviteID;

    Meteor.call('campaign-invite-send-email', newInvite);

    return newInviteID;
  },
  'campaign-invite-send-email': function (invite) {
    const campaign = Campaigns.findOne({ _id: invite.campaign });
    const user = Meteor.users.findOne({ _id: campaign.owner }, { fields: { services: 0 } });

    const userName = user.profile.name;
    const campaignName = `${campaign.information.name || ''} ${campaign.information.lastName || ''}`;

    const dbUser = Accounts.findUserByEmail(invite.email);

    if (dbUser) {
      Meteor.call('notifications-create', dbUser._id, {
        type: 'info',
        title: 'Nueva Invitación',
        description: `Has sido invitado a administrar la cuenta de ${campaignName}`,
        url: `http://localhost:3000/campaings/invite/${invite._id}`,
      });
    }

    this.unblock();
    let subject = 'Ha sido invitado a administrar una cuenta';
    let html = `${userName || `El usuario (${user.emails[0].address})`} te ha invitado a administrar la campaña de ${campaignName}<br> <a href='http://localhost:3000/campaigns/invite/${invite._id}'>Ver Invitación</a>`;
    if (invite.type === 'share') {
      subject = 'Ha sido invitado a administrar una cuenta';
      html = `${userName || `El usuario (${user.emails[0].address})`} te ha invitado a administrar la campaña de ${campaignName}<br> <a href='http://localhost:3000/campaings/invite/${invite._id}'>Ver Invitación</a>`;
    }
    Email.send({
      from: Settings.email.noReply,
      to: invite.email,
      subject,
      html,
    });

    return CampaignInvites.update({ _id: invite._id }, {
      $set: {
        status: 'sent',
        sent: new Date(),
      },
    });
  },
  'campaign-invite-delete': function (invite, campaignID) {
    const dbInvite = CampaignInvites.findOne({ _id: invite._id });

    if (dbInvite.campaign !== campaignID) {
      throw new Meteor.Error(403, 'Invite doesn\'t belong to campaign');
    }

    return CampaignInvites.remove({ _id: invite._id });
  },
  'campaign-mark-delete': function (campaign) {
    if (campaign) {
      Campaigns.remove({ _id: campaign._id });
    }

    return 'Deleted';
  },
  'campaign-get-account': function (accountArray) {
    return accountArray.map((i,index) => {
      console.log('OK',i)
      const newAccount = SocialAccounts.findOne({_id: i.accountId});
      return Object.assign({}, i,  { index: (index + 1) }, {account: newAccount});
    })
  },
});
