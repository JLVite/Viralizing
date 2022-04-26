import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_subscriptions_create": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription Data Provided");
        }
        check(user, Object);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        data.customer = user.stripe.id;

        check(data, {
            customer: Match.Where(function (customer) {
                check(customer, String);
                if ((!data.items && !data.plan) || (data.items && data.plan)) {
                    throw new Meteor.Error(500, "[Stripe Subscriptions] - Either Items or Plan must be provided");
                }
                if (data.items && data.items.length === 0) {
                    throw new Meteor.Error(500, "[Stripe Subscriptions] - Items must have at least 1 plan");
                }
                return true;
            }),
            application_fee_percent: Match.Maybe(String),
            coupon: Match.Maybe(String),
            items: Match.Maybe([Match.ObjectIncluding({
                plan: String,
                quantity: Match.Maybe(Number)
            })]),
            metadata: Match.Maybe(Object),
            plan: Match.Maybe(String),
            prorate: Match.Maybe(String),
            quantity: Match.Maybe(Number),
            source: Match.Maybe(String),
            tax_percent: Match.Maybe(Number),
            trial_end: Match.Maybe(Number),
            trial_period_days: Match.Maybe(Number)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.subscriptions.create, client.subscriptions);

        return method(data);
    },
    "stripe_subscriptions_update": function (subscriptionID, data) {
        if (!subscriptionID) {
            throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription Data Provided");
        }

        check(subscriptionID, String);
        check(data, {
            application_fee_percent: Match.Maybe(String),
            coupon: Match.Maybe(String),
            items: Match.Maybe([Match.ObjectIncluding({
                plan: String,
                quantity: Match.Maybe(Number)
            })]),
            metadata: Match.Maybe(Object),
            plan: Match.Maybe(String),
            prorate: Match.Maybe(String),
            proration_date: Match.Maybe(String),
            quantity: Match.Maybe(Number),
            source: Match.Maybe(String),
            tax_percent: Match.Maybe(Number),
            trial_end: Match.Maybe(Number)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.subscriptions.update, client.subscriptions);

        return method(subscriptionID, data);
    },
    "stripe_subscriptions_get": function (subscriptionID) {
        if (!subscriptionID) {
            throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription ID Provided");
        }

        check(subscriptionID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.subscriptions.retrieve, client.subscriptions);

        return method(subscriptionID);
    },
    "stripe_subscriptions_delete": function (subscriptionID) {
        if (!subscriptionID) {
            throw new Meteor.Error(500, "[Stripe Subscriptions] - No Subscription ID Provided");
        }

        check(subscriptionID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.subscriptions.del, client.subscriptions);

        return method(subscriptionID);
    },
    "stripe_subscriptions_list": function (query) {
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
        let method = Meteor.wrapAsync(client.subscriptions.list, client.subscriptions);
        return method(query);
    }
});