Accounts.onCreateUser(function (options, user) {

  //console.log("USER_CREATE", user);
  let isSocial = false;
  let socialProfile = {
      name: null,
      lname: null,
      email: null,
      avatar: null
    },
    serviceData,
    serviceName;
  if (user.services) {

    if (user.services.facebook) {
      serviceName = 'facebook';
      isSocial = true;
      serviceData = user.services.facebook;
      socialProfile.name = serviceData.first_name;
      socialProfile.lname = serviceData.last_name;
      socialProfile.email = serviceData.email;
      socialProfile.avatar = 'http://graph.facebook.com/' + serviceData.id + '/picture/?type=large';
    }
    if (user.services.google) {
      serviceName = 'google';
      isSocial = true;
      serviceData = user.services.google;
      socialProfile.name = serviceData.given_name;
      socialProfile.lname = serviceData.family_name;
      socialProfile.email = serviceData.email;
      socialProfile.avatar = serviceData.picture;
    }

    if (user.services.twitter) {
      serviceName = 'twitter';
      isSocial = true;
      serviceData = user.services.twitter;
      socialProfile.name = serviceData.screenName;
      socialProfile.avatar = serviceData.profile_image_url_https;
    }

    if (user.services.instagram) {
      serviceName = 'instagram';
      isSocial = true;
      serviceData = user.services.instagram;
      socialProfile.name = serviceData.full_name;
      socialProfile.avatar = serviceData.profile_picture;
    }
  }

  if (!user.profile) {
    user.profile = {};
  }

  if (isSocial) {
    user.profile.name = socialProfile.name;
    user.profile.lastName = socialProfile.lname;
    user.profile.avatar = socialProfile.avatar;

    //Insert Email
    if (socialProfile.email) {
      let email = {
        address: socialProfile.email,
        verified: true
      };
      user.emails = [email];
    }

    //TODO: REVIEW THIS
    /*Meteor.call("profile-create", user, {
        serviceName,
        serviceData
    })*/
  }

  return user;
});
