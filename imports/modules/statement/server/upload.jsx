Slingshot.createDirective('test-bucket-ibol', Slingshot.S3Storage, {
  bucket: 'test-bucket-ibol',
  allowedFileTypes: null,
  acl: 'public-read',

  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = 'Please login before posting files';
      throw new Meteor.Error('Login Required', message);
    }

    return true;
  },
  maxSize: 5 * 1024 * 1024 * 1024,
  key: function (file) {

    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    return user.username + '/' + file.name;
  }
});
