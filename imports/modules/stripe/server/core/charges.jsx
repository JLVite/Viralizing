import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_charges_create": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Stripe User Data Provided");
        }
        check(user, Object);
        check(data, {
            amount: Number,
            currency: String,
            application_fee: Match.Maybe(Number),
            capture: Match.Maybe(Boolean),
            description: Match.Maybe(String),
            destination: Match.Maybe(Match.ObjectIncluding({
                account: Match.Maybe(Object),
                amount: Match.Maybe(Number)
            })),
            transfer_group: Match.Maybe(String),
            on_behalf_of: Match.Maybe(String),
            metadata: Match.Maybe(Object),
            receipt_email: Match.Maybe(String),
            shipping: Match.Maybe(Object),
            customer: Match.Maybe(String),
            source: Match.Maybe(String)
        });

        if (!user.emails[0] || !user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (user && user.emails[0]) {
            data.receipt_email = user.emails[0].address;
        }

        if (!data.source) {
            if (!user.stripe.id) {
                throw new Meteor.Error(500, "[Stripe Charges] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
            }
            data.customer = user.stripe.id;
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.charges.create, client.charges);

        return method(data);
    },
    "stripe_charges_update": function (chargeID, data) {
        if (!chargeID) {
            throw new Meteor.Error(500, "[Stripe Charges] - No Stripe Charge ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Charges] - No Stripe User Data Provided");
        }

        check(chargeID, String);
        check(data, {
            description: Match.Maybe(String),
            fraud_details: Match.Maybe(Object),
            metadata: Match.Maybe(Object),
            receipt_email: Match.Maybe(String),
            destination: Match.Maybe(Match.ObjectIncluding({
                address: Match.Maybe(Match.ObjectIncluding({
                    line1: String,
                    city: Match.Maybe(String),
                    country: Match.Maybe(String),
                    lin2: Match.Maybe(String),
                    postal_code: Match.Maybe(String),
                    state: Match.Maybe(String)
                })),
                name: String,
                carrier: Match.Maybe(String),
                phone: Match.Maybe(String),
                tracking_number: Match.Maybe(String)
            })),
            transfer_group: Match.Maybe(String)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.charges.update, client.charges);

        return method(chargeID, data);
    },
    "stripe_charges_get": function (chargeID) {
        if (!chargeID) {
            throw new Meteor.Error(500, "[Stripe Charges] - No Stripe Charge ID Provided");
        }

        check(chargeID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.charges.retrieve, client.charges);

        return method(chargeID);
    },
    "stripe_charges_capture": function (chargeID, data) {
        if (!chargeID) {
            throw new Meteor.Error(500, "[Stripe Charges] - No Stripe Charge ID Provided");
        }

        check(chargeID, String);
        check(data,{
            amount: Match.Maybe(Number),
            application_fee: Match.Maybe(Number),
            receipt_email: Match.Maybe(String),
            statement_descriptor: Match.Maybe(String)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.charges.capture, client.charges);

        return method(chargeID,data);
    },
    "stripe_charges_list": function (query) {
        if (!query) {
            throw new Meteor.Error(500, "[Stripe Charges] - No Query Provided");
        }

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
            source: Match.Maybe(Match.ObjectIncluding({
                object: Match.Maybe(String)
            })),
            starting_after: Match.Maybe(String),
            transfer_group: Match.Maybe(String)
        });
        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.charges.list, client.charges);
        return method(query);
    }
});