//console.log("EVENT_CRON");

SyncedCron.add({
  name: 'Run Post Actions',
  schedule: function (parser) {
    return parser.text('every 5 minutes');
  },
  job: function () {
    Meteor.call('posts-scheduled-run');
    return true;
  }
});

//Add CronJob every day for
