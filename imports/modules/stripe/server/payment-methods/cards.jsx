import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_cards_create": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card Data Provided");
        }
        // check(user, Object);
        // check(data, {
        //     address_city: Match.Maybe(String),
        //     address_country: Match.Maybe(String),
        //     address_line1: Match.Maybe(String),
        //     address_line2: Match.Maybe(String),
        //     address_state: Match.Maybe(String),
        //     address_zip: Match.Maybe(String),
        //     exp_month: Match.Maybe(Number),
        //     exp_year: Match.Maybe(Number),
        //     metadata: Match.Maybe(Object),
        //     name: Match.Maybe(String)
        // });

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
            console.log('USER_DATA', user)
        }

        let client = StripeConnection();
        
        let method = Meteor.wrapAsync(client.customers.createSource, client.customers);
        console.log("CONECTION",{id: data.id})
        const req = method(user.stripe.id, {source: data.id});
        console.log('req', req)
        return req;
    },
    "stripe_cards_update": function (user, cardID, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
        }
        if (!cardID) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card Data Provided");
        }

        check(user, Object);
        check(cardID, String);
        check(data, {
            address_city: Match.Maybe(String),
            address_country: Match.Maybe(String),
            address_line1: Match.Maybe(String),
            address_line2: Match.Maybe(String),
            address_state: Match.Maybe(String),
            address_zip: Match.Maybe(String),
            exp_month: Match.Maybe(Number),
            exp_year: Match.Maybe(Number),
            metadata: Match.Maybe(Object),
            name: Match.Maybe(String)
        });

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.updateCard, client.customers);

        return method(user.stripe.id, cardID, data);
    },
    "stripe_cards_get": function (user, cardID) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
        }
        if (!cardID) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card ID Provided");
        }

        check(user, Object);
        check(cardID, String);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.retrieveCard, client.customers);

        return method(user.stripe.id, cardID);
    },
    "stripe_cards_delete": function (user, cardID) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
        }
        if (!cardID) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Card Account ID Provided");
        }

        check(user, Object);
        check(cardID, String);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.deleteCard, client.customers);

        return method(user.stripe.id, cardID);
    },
    "stripe_cards_list": function (user, query) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
        }
        if (!query) {
            throw new Meteor.Error(500, "[Stripe Cards] - No Query Provided");
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
            throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.listCards, client.customers);
        const res = method(user.stripe.id, query);
        return res
    }
});