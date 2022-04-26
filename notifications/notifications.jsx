Herald.addCourier('appNotifications', {
  media: {
    onsite: {
      onRun: function () {
        console.log('NOTIFICATION_RUN');
        return this.run();
      }
    } //Send notifications to client, with no custom configuration
  },

  //will be a function on the collection instance, returned from find()
  message: function () {
    return 'There is a new post: "' + this.data.post.name + '"';
  }
});
