import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'native-authentication': (service, data) => {
    // Check service is a string
    check(service, String);
    // Check data is an object
    check(data, Object);
    console.log('SERVICE', service);
    console.log('DATA', data);
    // Initialize query object
    const query = {};
    // Set query for service
    query[`services[${service}].id`] = data.id;
    // Find matching account
    const user = Meteor.users.findOne(query);
    // If match found
    if (user) {
      // Return Token for login
      return Accounts.impSvc.set(user._id);
    }
    // Create Identity Object
    const identity = {};

    const newUser = {
      services: {},
      profile: { name: identity.name },
      emails: [{
        address: identity.email,
        verified: true
      }]
    };
    // Set Oauth service data
    newUser.services[service] = data;
    // Insert new user data
    userId = Meteor.users.insert(newUser);
    // Return Token for login
    return Accounts.impSvc.set(userId);
  }
});
