import StripeConnection from "../connection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Match} from "meteor/check";

Meteor.methods({
    "stripe_coupons_create": function (data) {
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon Data Provided");
        }
        check(data, {
            id: Match.Maybe(String),
            duration: Match.Where(function(duration){
                check(duration,String);
                if(duration==="repeating" && !data.duration_in_months){
                    throw new Error("duration_in_months must be set when duration is repeating");
                }
                if((!data.amount_off && !data.percent_off) || (data.amount_off && data.percent_off)){
                    throw new Error("Either percent_off or amount_off must be set");
                }
                if(data.amount_off && !data.currency){
                    throw new Error("Currency must be set when amount_off is used");
                }
                return true;
            }),
            amount_off: Match.Maybe(Match.Where(function (amount) {
                if (data.percent_off) {
                    return true;
                }
                check(amount, Number);
                return true
            })),
            currency: Match.Maybe(Match.Where(function (currency) {
                if (data.amount_off) {
                    check(currency, String);
                    return true;
                }
                return true
            })),
            duration_in_months: Match.Maybe(Match.Where(function (months) {
                if (data.duration==="repeating") {
                    check(months, Number);
                    return true;
                }
                return true
            })),
            max_redemptions: Match.Maybe(Number),
            metadata: Match.Maybe(Object),
            percent_off: Match.Maybe(Match.Where(function (amount) {
                if (data.amount_off) {
                    return true;
                }
                check(amount, Number);
                return true
            })),
            redeem_by: Match.Maybe(Number)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.coupons.create, client.coupons);

        return method(data);
    },
    "stripe_coupons_update": function (couponID, data) {
        if (!couponID) {
            throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon ID Provided");
        }
        if (!data) {
            throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon Data Provided");
        }

        check(couponID, String);
        check(data, {
            metadata: Match.Maybe(Object)
        });

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.coupons.update, client.coupons);

        return method(couponID, data);
    },
    "stripe_coupons_get": function (couponID) {
        if (!couponID) {
            throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon ID Provided");
        }

        check(couponID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.coupons.retrieve, client.coupons);

        return method(couponID);
    },
    "stripe_coupons_delete": function (couponID) {
        if (!couponID) {
            throw new Meteor.Error(500, "[Stripe Coupons] - No Coupon ID Provided");
        }

        check(couponID, String);

        let client = StripeConnection();
        let method = Meteor.wrapAsync(client.coupons.del, client.coupons);

        return method(couponID);
    },
    "stripe_coupons_list": function (query) {
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
        let method = Meteor.wrapAsync(client.coupons.list, client.coupons);
        return method(query);
    }
});