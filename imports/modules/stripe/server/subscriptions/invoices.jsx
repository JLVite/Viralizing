import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_invoices_create": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice Data Provided");
        }
        check(user, Object);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Invoices] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        data.customer = user.stripe.id;

        check(data, {
            customer: String,
            application_fee: Match.Maybe(String),
            description: Match.Maybe(String),
            metadata: Match.Maybe(Object),
            statement_descriptor: Match.Maybe(String),
            subscription: Match.Maybe(String),
            tax_percent: Match.Maybe(Number)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoices.create, client.invoices);

        return method(data);
    },
    "stripe_invoices_update": function (invoiceID, data) {
        if (!invoiceID) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice Data Provided");
        }

        check(invoiceID, String);
        check(data, {
            application_fee: Match.Maybe(String),
            closed: Match.Maybe(Boolean),
            description: Match.Maybe(String),
            forgiven: Match.Maybe(Boolean),
            metadata: Match.Maybe(Object),
            statement_descriptor: Match.Maybe(String),
            subscription: Match.Maybe(String),
            tax_percent: Match.Maybe(Number),
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoices.update, client.invoices);

        return method(invoiceID, data);
    },
    "stripe_invoices_get": function (invoiceID) {
        if (!invoiceID) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
        }

        check(invoiceID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoices.retrieve, client.invoices);

        return method(invoiceID);
    },
    "stripe_invoices_get_items": function (invoiceID, query) {
        if (!invoiceID) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
        }

        check(invoiceID, String);
        check(query, {
            coupon: Match.Maybe(String),
            customer: Match.Maybe(String),
            ending_before: Match.Maybe(String),
            limit: Match.Maybe(Number),
            starting_after: Match.Maybe(String),
            subscription: Match.Maybe(String),
            subscription_items: Match.Maybe(Match.ObjectIncluding({
                id: Match.Maybe(String),
                deleted: Match.Maybe(String),
                plan: Match.Maybe(String),
                quantity: Match.Maybe(String)
            })),
            subscription_plan: Match.Maybe(String),
            subscription_prorate: Match.Maybe(String),
            subscription_proration_date: Match.Maybe(String),
            subscription_quantity: Match.Maybe(String),
            subscription_tax_percent: Match.Maybe(String),
            subscription_trial_end: Match.Maybe(String)

        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoices.retrieveLines, client.invoices);

        return method(invoiceID);
    },
    "stripe_invoices_get_upcoming": function (user, query) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Application User Provided");
        }

        check(user, Object);
        check(query, {
            coupon: Match.Maybe(String),
            subscription: Match.Maybe(String),
            subscription_items: Match.Maybe(Match.ObjectIncluding({
                id: Match.Maybe(String),
                deleted: Match.Maybe(String),
                plan: Match.Maybe(String),
                quantity: Match.Maybe(String)
            })),
            subscription_plan: Match.Maybe(String),
            subscription_prorate: Match.Maybe(String),
            subscription_proration_date: Match.Maybe(String),
            subscription_quantity: Match.Maybe(String),
            subscription_tax_percent: Match.Maybe(String),
            subscription_trial_end: Match.Maybe(String)
        });

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Invoices] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoices.retrieveUpcoming, client.invoices);

        return method(user.stripe.id, query);
    },
    "stripe_invoices_pay": function (invoiceID) {
        if (!invoiceID) {
            throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
        }

        check(invoiceID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoices.pay, client.invoices);

        return method(invoiceID);
    },
    "stripe_invoices_list": function (query) {
        check(query, {
            customer: Match.Maybe(String),
            date: Match.Maybe(Match.ObjectIncluding({
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
        let method = Meteor.wrapAsync(client.invoices.list, client.invoices);
        return method(query);
    }
});