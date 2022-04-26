import { Meteor } from 'meteor/meteor';
import userSchema from '../../core/server/users/schema';

Meteor.methods({
    'update-user-profile': function (userID,values){
        let userId = userID || Meteor.userId();
        
        let dbUser = Meteor.users.findOne({_id:userId});
        const dbProfile = dbUser.profile;
        const dbEmails = dbUser.emails;
        const profile = {...values}

        dbEmails[0].address = values.email
        delete profile['email'];
        const user = {profile,emails:dbEmails}
        console.log('USER-SAVED',user)
        Meteor.users.update({_id: userID}, {$set: {...user}})


    },
    'update-email-profile': function (userID,email){
        let userId = userID || Meteor.userId();
        
        let dbUser = Meteor.users.findOne({_id:userId});
        const dbEmails = dbUser.emails;

        dbEmails[0].address = email
        console.log(dbEmails)
        Meteor.users.update({_id: userID}, {$set: {emails:dbEmails}})


    }
});

