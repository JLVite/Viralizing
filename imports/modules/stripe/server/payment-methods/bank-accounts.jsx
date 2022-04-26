import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_bank_accounts_create": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe User Data Provided");
        }
        check(user, Object);
        check(data, {
            source: Match.OneOf(String, Match.ObjectIncluding({
                object: String,
                account_number: String,
                country: String,
                currency: String,
                account_holder_name: String,
                account_holder_type: String,
                routing_number: String
            })),
            metadata: Match.Maybe(Object)
        });

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.createSource, client.customers);

        return method(user.stripe.id, data);
    },
    "stripe_bank_accounts_update": function (user, accountID, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
        }
        if (!accountID) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account Data Provided");
        }

        check(user, Object);
        check(accountID, String);
        check(data, {
            account_holder_name: Match.Maybe(String),
            account_holder_type: Match.Maybe(String),
            metadata: Match.Maybe(Object)
        });

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.updateCard, client.customers);

        return method(user.stripe.id, accountID, data);
    },
    "stripe_bank_accounts_get": function (user, accountID) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
        }
        if (!accountID) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
        }

        check(user, Object);
        check(accountID, String);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.retrieveSource, client.customers);

        return method(user.stripe.id, accountID);
    },
    "stripe_bank_accounts_delete": function (user, accountID) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
        }
        if (!accountID) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
        }

        check(user, Object);
        check(accountID, String);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.deleteSource, client.customers);

        return method(user.stripe.id, accountID);
    },
    "stripe_bank_accounts_verify": function (user, accountID, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
        }
        if (!accountID) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
        }

        if (!data) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe User Data Provided");
        }

        check(user, Object);
        check(accountID, String);
        check(data, {
            amounts: [Number],
            verification_method: Match.Maybe(Object)
        });

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }


        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.verifySource, client.customers);

        return method(user.stripe.id, accountID, data);
    },
    "stripe_bank_accounts_list": function (user, query) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
        }
        if (!query) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Query Provided");
        }

        check(user, Object);
        check(query, {
            object: Match.Maybe(String),
            ending_before: Match.Maybe(String),
            limit: Match.Maybe(Number),
            starting_after: Match.Maybe(String)
        });

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        query.object = "bank_account";

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.listSources, client.customers);
        return method(user.stripe.id, query);
    }
});