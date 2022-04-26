import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_customers_create": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Stripe User Data Provided");
        }
        check(user, Object);
        check(data, {
            account_balance: Match.Maybe(Number),
            business_vat_id: Match.Maybe(String),
            coupon: Match.Maybe(String),
            description: Match.Maybe(String),
            email: Match.Maybe(String),
            metadata: Match.Maybe(Object),
            shipping: Match.Maybe(Object),
            source: Match.Maybe(Object)
        });

        if (!user.emails[0] || !user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Customers] - User (" + user._id + ") already has a Stripe account.");
        }

        if (user && user.emails[0]) {
            data.email = user.emails[0].address;
        }

        if (user && user.profile) {
            data.description = (user.profile.name || "") + " " + (user.profile.lastName || "") + "-[" + user._id + "]";
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.create, client.customers);

        let stripeRes = method(data);

        //console.log('Creation', Meteor.users.findOne({_id: user._id}))

        const update = Meteor.users.update({_id: user._id}, {$set: {stripe: Object.assign({}, user.stripe, {id: stripeRes.id})}});

        console.log('Creation__AFTER', Meteor.users.findOne({_id: user._id}))
        
        console.log('USE>R_UPDATE', update)

        return stripeRes;
    },
    "stripe_customers_update": function (user, data) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Stripe User Data Provided");
        }

        check(user, Object);
        check(data, {
            account_balance: Match.Maybe(Number),
            business_vat_id: Match.Maybe(String),
            coupon: Match.Maybe(String),
            default_source: Match.Maybe(String),
            description: Match.Maybe(String),
            email: Match.Maybe(String),
            metadata: Match.Maybe(Object),
            shipping: Match.Maybe(Object),
            source: Match.Maybe(Object)
        });

        if (!user.emails[0] || !user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (user && user.emails[0]) {
            data.email = user.emails[0].address;
        }

        if (!data.description && user && user.profile) {
            data.description = (user.profile.name || "") + " " + (user.profile.lastName || "") + " - [" + user._id + "]";
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.update, client.customers);

        let stripeRes = method(user.stripe.id, data);

        return stripeRes;
    },
    "stripe_customers_get": function (user) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
        }

        check(user, Object);

        if (!user.emails[0] || !user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user || !user.stripe || !user.stripe.id) {
            Meteor.call("stripe_customers_create",user,{});
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user || !user.stripe || !user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Customers] - User or Stripe data doesn't exist.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.retrieve, client.customers);

        return method(user.stripe.id);
    },
    "stripe_customers_delete": function (user) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
        }

        check(user, Object);

        if (!user.emails[0] || !user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user || !user.stripe || !user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Customers] - User or Stripe data doesn't exist.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.del, client.customers);

        Meteor.users.update({_id: user._id}, {$set: {stripe: {id: null, cards: []}}});

        return method(user.stripe.id);
    },
    "stripe_customers_list": function (query) {
        if (!query) {
            throw new Meteor.Error(500, "[Stripe Customers] - No Query Provided");
        }

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
        let method = Meteor.wrapAsync(client.customers.list, client.customers);
        return method(query);
    }
});