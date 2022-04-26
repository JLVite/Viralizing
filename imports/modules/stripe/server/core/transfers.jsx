import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_transfers_create": function (data) {
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Transfers] - No Transfer Data Provided");
        }
        check(data, {
            amount: Number,
            application_fee: Match.Maybe(Number),
            currency: String,
            destination: String,
            description: Match.Maybe(String),
            metadata: Match.Maybe(Object),
            source_transaction: Match.Maybe(String),
            statement_descriptor: Match.Maybe(String),
            source_type: Match.Maybe(String),
            method: Match.Maybe(String)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.transfers.create, client.transfers);

        return method(data);
    },
    "stripe_transfers_update": function (transferID, data) {
        if (!transferID) {
            throw new Meteor.Error(500, "[Stripe Transfers] - No Stripe Transfer ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Transfers] - No Stripe Transfer Data Provided");
        }

        check(transferID, String);
        check(data, {
            description: Match.Maybe(String),
            metadata: Match.Maybe(Object)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.transfers.update, client.transfers);

        return method(transferID, data);
    },
    "stripe_transfers_get": function (transferID) {
        if (!transferID) {
            throw new Meteor.Error(500, "[Stripe Transfers] - No Stripe Transfer ID Provided");
        }

        check(transferID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.transfers.retrieve, client.transfers);

        return method(transferID);
    },
    "stripe_transfers_list": function (query) {
        if (!query) {
            throw new Meteor.Error(500, "[Stripe Transfers] - No Query Provided");
        }

        check(query, {
            created: Match.Maybe(Match.ObjectIncluding({
                gt: Match.Maybe(String),
                gte: Match.Maybe(String),
                lt: Match.Maybe(String),
                lte: Match.Maybe(String)
            })),
            date: Match.Maybe(Match.ObjectIncluding({
                gt: Match.Maybe(String),
                gte: Match.Maybe(String),
                lt: Match.Maybe(String),
                lte: Match.Maybe(String)
            })),
            destination: Match.Maybe(String),
            ending_before: Match.Maybe(String),
            limit: Match.Maybe(Number),
            starting_after: Match.Maybe(String),
            status: Match.Maybe(String),
            transfer_group: Match.Maybe(String)
        });
        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.transfers.list, client.transfers);
        return method(query);
    }
});