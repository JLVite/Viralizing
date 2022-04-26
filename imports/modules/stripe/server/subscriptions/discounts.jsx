import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

Meteor.methods({
    "stripe_discounts_delete_from_customer": function (user) {
        if (!user) {
            throw new Meteor.Error(500, "[Stripe Discounts] - No Application User Provided");
        }

        check(user, Object);

        if (!user.stripe) {
            user = Meteor.users.findOne({_id: user._id});
        }

        if (!user.stripe.id) {
            throw new Meteor.Error(500, "[Stripe Discounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
        }

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.customers.deleteDiscount, client.customers);

        return method(user.stripe.id);
    },
    "stripe_discounts_delete_from_subscription": function (subscriptionID) {
        if (!subscriptionID) {
            throw new Meteor.Error(500, "[Stripe Discounts] - No Subscription ID Provided");
        }

        check(subscriptionID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.subscriptions.deleteDiscount, client.subscriptions);

        return method(subscriptionID);
    }
});