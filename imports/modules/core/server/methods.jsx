import {Meteor} from 'meteor/meteor';


Meteor.methods({
  'DONOTUSE__system-wide-reset': ()=>{
    Meteor.users.remove({});
    SocialAccountsInvites.remove({});
    SocialAccounts.remove({});
    Advertising.remove({});
    CampaignInvites.remove({});
    Campaigns.remove({});
    Invites.remove({});
    Payments.remove({});
    Posts.remove({});
    Reports.remove({});
    TeamAttack.remove({});
  }
});
