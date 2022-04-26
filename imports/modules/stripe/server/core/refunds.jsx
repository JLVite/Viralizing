import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_refunds_create": function (data) {
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Refunds] - No Refund Data Provided");
        }
        check(data, {
            charge: String,
            amount: Match.Maybe(Number),
            metadata: Match.Maybe(Object),
            reason: Match.Maybe(String),
            refund_application_fee: Match.Maybe(String),
            reverse_transfer: Match.Maybe(String)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.refunds.create, client.refunds);

        return method(data);
    },
    "stripe_refunds_update": function (refundID, data) {
        if (!refundID) {
            throw new Meteor.Error(500, "[Stripe Refunds] - No Stripe Refund ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Refunds] - No Stripe Refund Data Provided");
        }

        check(refundID, String);
        check(data, {
            metadata: Match.Maybe(Object)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.refunds.update, client.refunds);

        return method(refundID, data);
    },
    "stripe_refunds_get": function (refundID) {
        if (!refundID) {
            throw new Meteor.Error(500, "[Stripe Refunds] - No Stripe Refund ID Provided");
        }

        check(refundID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.refunds.retrieve, client.refunds);

        return method(refundID);
    },
    "stripe_refunds_list": function (query) {
        if (!query) {
            throw new Meteor.Error(500, "[Stripe Refunds] - No Query Provided");
        }

        check(query, {
            charge: Match.Maybe(String),
            ending_before: Match.Maybe(String),
            limit: Match.Maybe(Number),
            starting_after: Match.Maybe(String)
        });
        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.refunds.list, client.refunds);
        return method(query);
    }
});