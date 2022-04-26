import { Meteor } from 'meteor/meteor';
import Schema from '../../../server/schemas/team-attack/schema';

Meteor.methods({
  'teamAttack-create': function (teamAttack) {
    let user = Meteor.user();

    let newTeamAttack = Object.assign({}, Schema, {
      owner: user._id
    }, teamAttack);

    return TeamAttack.insert(newTeamAttack);
  },
  'teamAttack-save': function (teamAttack) {
    const user = Meteor.user();
    //console.log("teamAttack-save", teamAttack);
    let dbTeamAttack = TeamAttack.findOne({ _id: teamAttack._id });

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === '__typename') {
          delete obj[k];
        }
        if (obj[k] && typeof obj[k] === 'object') {
          removeTypeNames(obj[k]);
        }
      });
    };

    teamAttack.owner = teamAttack.owner._id;
    teamAttack.members = teamAttack.members.map((m) => m._id);

    removeTypeNames(teamAttack);

    return TeamAttack.update(teamAttack._id, { $set: Object.assign({}, dbTeamAttack, teamAttack) });
  },
  'teamAttack-delete': function (teamAttack) {
    const user = Meteor.user();
    let dbTeamAttack = TeamAttack.findOne({ _id: teamAttack._id });

    if (dbTeamAttack.owner !== user._id) {
      throw new Meteor.Error(403, 'Only the owner can delete an account');
    }

    return TeamAttack.remove({ _id: dbTeamAttack._id });
  }
});
