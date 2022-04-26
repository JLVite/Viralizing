import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import Schema from '../../../server/schemas/reports/schema';
import Settings from '../../../settings';

Meteor.methods({
  'report-create': function (data) {
    let user = Meteor.user();

    let newReport = Object.assign({}, Schema, data, {
      owner: user._id,
    });

    console.log('REPORT_CREATE', newReport);

    return Reports.insert(newReport);
  },
  'report-save': function (report) {
    const user = Meteor.user();
    let dbReport = Reports.findOne({ _id: report._id });
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

    report.owner = report.owner._id;

    removeTypeNames(report);

    return Reports.update(report._id, { $set: Object.assign({}, dbReport, report) });
  },
  'report-delete': function (report) {
    let dbReport = Reports.findOne({ _id: report._id });
    const user = Meteor.user();

    if (dbReport.owner !== user._id) {
      throw new Meteor.Error(403, 'Report doesn\'t belong to user.');
    }

    return Reports.remove({ _id: report._id });
  }
});

