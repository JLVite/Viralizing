import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_plans_create": function (data) {
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan Data Provided");
        }
        check(data, {
            id: String,
            amount: Number,
            currency: String,
            interval: String,
            name: String,
            interval_count: Match.Maybe(String),
            metadata: Match.Maybe(Object),
            statement_descriptor: Match.Maybe(String),
            trial_period_days: Match.Maybe(Number)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.plans.create, client.plans);

        return method(data);
    },
    "stripe_plans_update": function (planID, data) {
        if (!planID) {
            throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan Data Provided");
        }

        check(planID, String);
        check(data, {
            metadata: Match.Maybe(Object),
            name: Match.Maybe(String),
            statement_descriptor: Match.Maybe(String),
            trial_period_days: Match.Maybe(Number)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.plans.update, client.plans);

        return method(planID, data);
    },
    "stripe_plans_get": function (planID) {
        if (!planID) {
            throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan ID Provided");
        }

        check(planID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.plans.retrieve, client.plans);

        return method(planID);
    },
    "stripe_plans_delete": function (planID) {
        if (!planID) {
            throw new Meteor.Error(500, "[Stripe Plans] - No Plan ID Provided");
        }

        check(planID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.plans.del, client.plans);

        return method(planID);
    },
    "stripe_plans_list": function (query) {
        check(query, {
            created: Match.Maybe(Match.ObjectIncluding({
                gt: Match.Maybe(String),
                gte: Match.Maybe(String),
                lt: Match.Maybe(String),
                lte: Match.Maybe(String)
            })),
            ending_before: Match.Maybe(String),
            limit: Match.Maybe(Number),
            starting_after: Match.Maybe(String)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.plans.list, client.plans);
        return method(query);
    }
});