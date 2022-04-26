import { Meteor } from 'meteor/meteor';
//console.log("Invites-Scheduled");
Meteor.methods({
  'invites-scheduled-run': function () {
    let invites = Invites.find({ status: 'scheduled' });
    let schedules = [];
    invites.forEach(function (invite) {
      let accounts = SocialAccounts.find({
        _id: { $in: invite.members }
      }, {
        fields: {
          '_id': 1,
          'information.name': 1,
          'information.lastName': 1,
          'information.avatar': 1,
          'network': 1
        }
      }).fetch();
      let data = {
        message: invite.message.message,
        accounts,
        status: 'pending',
        campaign: invite.campaign,
        invite: invite._id,
        isPaid: true,
        date: invite.date,
        deadline: invite.deadline,
        media: invite.message.media,
        hashtags: invite.message.hashtags
      };
      schedules.push(data);
      Meteor.call('posts-scheduler', data, invite.owner);
      Invites.update(invite._id, { $set: { status: 'sent' } });
    });
    return { data: schedules };
  }
});
