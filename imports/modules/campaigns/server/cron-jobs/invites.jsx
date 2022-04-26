SyncedCron.add({
  name: 'Run Invites Actions',
  schedule: function (parser) {
    return parser.text('every 1 minutes');
  },
  job: function () {
    //Meteor.call("invites-scheduled-run");
    return true;
  }
});

//Add CronJob every day for
