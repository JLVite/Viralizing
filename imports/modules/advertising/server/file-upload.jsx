import uuid from 'uuid';

Slingshot.createDirective('advertising-image-upload', Slingshot.S3Storage, {
  bucket: 'ibol-advertising-media',
  acl: 'public-read',
  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = 'Please login before posting files';
      throw new Meteor.Error('Login Required', message);
    }

    return true;
  },
  maxSize: 10 * 1024 * 1024, // 10 MB (use null for unlimited).
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  key: function (file) {
    let re = /(?:\.([^.]+))?$/;
    let fileExt = re.exec(file.name)[1];

    return Meteor.userId() + '/' + uuid.v4() + '.' + fileExt;
  }
});
