import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_invoice_items_create": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Invoice Items] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item Data Provided");
        }
        check(user, Object);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Invoice Items] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        data.customer = user.stripe.id;

        check(data, {
            amount: Number,
            currency: String,
            customer: String,
            description: Match.Maybe(String),
            discountable: Match.Maybe(Boolean),
            invoice: Match.Maybe(String),
            metadata: Match.Maybe(Object),
            subscription: Match.Maybe(String)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoiceItems.create, client.invoiceItems);

        return method(data);
    },
    "stripe_invoice_items_update": function (subscriptionID, data) {
        if (!subscriptionID) {
            throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item Data Provided");
        }

        check(subscriptionID, String);
        check(data, {
            amount: Number,
            description: Match.Maybe(String),
            discountable: Match.Maybe(Boolean),
            metadata: Match.Maybe(Object)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoiceItems.update, client.invoiceItems);

        return method(subscriptionID, data);
    },
    "stripe_invoice_items_get": function (subscriptionID) {
        if (!subscriptionID) {
            throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item ID Provided");
        }

        check(subscriptionID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoiceItems.retrieve, client.invoiceItems);

        return method(subscriptionID);
    },
    "stripe_invoice_items_delete": function (subscriptionID) {
        if (!subscriptionID) {
            throw new Meteor.Error(500, "[Stripe Invoice Items] - No Invoice Item ID Provided");
        }

        check(subscriptionID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoiceItems.del, client.invoiceItems);

        return method(subscriptionID);
    },
    "stripe_invoice_items_list": function (query) {
        check(query, {
            created: Match.Maybe(Match.ObjectIncluding({
                gt: Match.Maybe(String),
                gte: Match.Maybe(String),
                lt: Match.Maybe(String),
                lte: Match.Maybe(String)
            })),
            customer: Match.Maybe(String),
            ending_before: Match.Maybe(String),
            limit: Match.Maybe(Number),
            starting_after: Match.Maybe(String)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.invoiceItems.list, client.invoiceItems);
        return method(query);
    }
});