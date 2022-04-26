import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    facebookAdAccounts(root, args, context) {
      let accounts = Meteor.call('fb-marketing-adAccounts-list', args.socialAccountID, args.campaignID);
      return accounts.map(a => {
        let res = {
          _id: a.account_id,
          name: a.name,
          money: {
            spent: a.account_id,
            balance: a.balance,
            currency: a.currency
          },
          endAdvertiser: {
            _id: a.end_advertiser,
            name: a.end_advertiser_name
          },
          created: a.created_time,
          business: {}
        };
        if (a.business && a.business.id) {
          res.business = {
            _id: a.business.id,
            name: a.business.name
          };
        }
        return res;
      });
    },
    facebookAdsCampaign(root, args, context) {
      let c = Meteor.call('fb-marketing-campaigns-read', args.socialAccountID, args.campaignID);

      let res = {
        _id: c.id,
        ibolAccount: args.socialAccountID,
        name: c.name,
        account: c.account_id,
        buyingType: c.buying_type,
        objective: c.objective,
        status: {
          configured: c.configured_status,
          effective: c.effective_status,
          status: c.status
        },
        created: new Date(c.created_time),
        updated: new Date(c.updated_time),
        spendCap: c.spend_cap,
        startDate: new Date(c.start_time),
        endDate: new Date(c.stop_time),
        adsets: []
      };

      if (c.adsets) {
        res.adSets = c.adsets.data.map(a => ({
          _id: a.id,
          ibolAccount: args.socialAccountID
        }));
      }

      return res;
    },
    facebookAdsCampaigns(root, args, context) {
      console.log('facebookAdsCampaigns', args.socialAccountID, args.adAccountID);
      let campaigns = Meteor.call('fb-marketing-campaigns-list', args.socialAccountID, args.adAccountID);

      return campaigns.map(c => {
        let res = {
          _id: c.id,
          ibolAccount: args.socialAccountID,
          name: c.name,
          account: c.account_id,
          buyingType: c.buying_type,
          objective: c.objective,
          status: {
            configured: c.configured_status,
            effective: c.effective_status,
            status: c.status
          },
          created: new Date(c.created_time),
          updated: new Date(c.updated_time),
          spendCap: c.spend_cap,
          startDate: new Date(c.start_time),
          endDate: new Date(c.stop_time),
          adSets: []
        };
        if (c.adsets && c.adsets.data) {
          res.adSets = c.adsets.data.map(a => ({
            _id: a.id,
            ibolAccount: args.socialAccountID
          }));
        }
        return res;
      });
    },
    facebookAdsCampaignsAdSets(root, args, context) {
      let adSets = Meteor.call('fb-marketing-adsets-from-campaign', args.socialAccountID, args.campaignID);
      console.log('facebookAdsCampaignsAdSets', adSets);
      return adSets.map(a => {
        let res = {
          _id: a.id,
          ibolAccount: args.socialAccountID,
          name: a.name,
          account: a.account_id,
          campaign: a.campaign._id,
          created: new Date(a.created_time),
          updated: new Date(a.updated_time),
          billingEvent: a.billing_event,
          goal: a.optimization_goal,
          startDate: new Date(a.start_time),
          endDate: new Date(a.end_time),
          money: {
            autoBid: a.is_autobid,
            avgPrizePaceing: a.is_average_price_pacing,
            budget: {
              daily: a.daily_budget,
              lifetime: a.lifetime_budget,
              remaining: a.budget_remaining
            }
          },
          recommendations: [],
          impressions: a.lifetime_imps,
          status: {
            configured: a.configured_status,
            effective: a.effective_status,
            status: a.status
          },
          promotedObject: {
            type: 'Page',
            data: a.promoted_object ? a.promoted_object.page_id : null
          },
          targeting: {
            user_os: a.targeting.user_os,
            user_device: a.targeting.user_device,
            facebook_positions: a.targeting.facebook_positions,
            age_max: a.targeting.age_max,
            age_min: a.targeting.age_min,
            geo_locations: {
              countries: a.targeting.geo_locations.countries,
              locationTypes: a.targeting.geo_locations.location_types,
              publisher_platforms: a.targeting.platforms
            },
          }
        };
        if (a.recommendations) {
          res.recommendations = a.recommendations.map(r => ({
            field: r.blame_field,
            code: r.code,
            confidence: r.confidence,
            importance: r.importance,
            message: r.message,
            title: r.title
          }));
        }
        return res;
      });
    },
    facebookAdsCampaignsAdSetAds(root, args, context) {
      let ads = Meteor.call('fb-marketing-ads-from-adset', args.socialAccountID, args.adSetID);

      return ads.data.map(a => ({
        _id: a.id,
        name: a.name,
        status: {
          configured: a.configured_status,
          effective: a.effective_status,
          status: a.status
        },
        adSet: a.adset_id,
        creative: []
      }));
    },
    facebookAdsCampaignsAdSetAd(root, args, context) {
      let res = Meteor.call('fb-marketing-ads-read', args.socialAccountID, args.adID);
      let reviewFeedback = null;
      if (res.ad_review_feedback) {
        let messages = [];
        Object.keys(res.ad_review_feedback.global).forEach(key => {
          messages.push(res.ad_review_feedback.global[key]);
        });
        reviewFeedback = messages.join(', ');
      }

      return {
        _id: res.id,
        ibolAccount: args.socialAccountID,
        name: res.name,
        status: {
          configured: res.configured_status,
          effective: res.effective_status,
          status: res.status
        },
        adSet: res.adset.id,
        campaign: res.campaign.id,
        created: res.created_time,
        updated: res.updated_time,
        creative: res.adcreatives.data.map(creative => creative.id),
        reviewFeedback
      };
    },
    facebookAdsCampaignsAudienceEstimate: (root, args, context) => {
      let audience = Meteor.call('fb-marketing-campaigns-audience', args.socialAccountID, args.adID, args.data);
      console.log('facebookAdsCampaignsAudienceEstimate', audience);
      return audience.data;
    },
    facebookAdsCampaignsDeliveryEstimate: (root, args, context) => {
      let delivery_es = Meteor.call('fb-marketing-campaigns-delivery-estimate', args.socialAccountID, args.adID, args.data);
      console.log('facebookAdsCampaignsDeliveryEstimate', delivery_es);
      return delivery_es.data[0];
    },
  },
  FacebookCampaign: {
    account: (campaign) => {
      console.log('FACEBOOK_CAMPAIGN_ACCOUNT', campaign.ibolAccount, campaign.account);
      let a = Meteor.call('fb-marketing-adAccounts-read', campaign.ibolAccount, campaign.account);
      return {
        _id: a.id,
        status: a.account_status,
        money: {
          spent: a.amount_spent,
          balance: a.balance,
          currency: a.currency
        },
        endAdvertiser: {
          _id: a.end_advertiser,
          name: a.end_advertiser_name
        },
        business: {
          _id: a.business.id,
          name: a.business.name
        },
        created: new Date(a.created_time)
      };
    },
    adSets: (campaign) => {
      let adSets = Meteor.call('fb-marketing-adsets-from-campaign', campaign.ibolAccount, campaign._id);

      return adSets.map(a => ({
        _id: a.id,
        ibolAccount: campaign.ibolAccount,
        name: a.name,
        account: a.account_id,
        campaign: a.campaign._id,
        created: new Date(a.created_time),
        updated: new Date(a.updated_time),
        billingEvent: a.billing_event,
        goal: a.optimization_goal,
        startDate: new Date(a.start_time),
        endDate: new Date(a.end_time),
        money: {
          autoBid: a.is_autobid,
          avgPrizePaceing: a.is_average_price_pacing,
          budget: {
            daily: a.daily_budget,
            lifetime: a.lifetime_budget,
            remaining: a.budget_remaining
          }
        },
        recommendations: a.recommendations.map(r => ({
          field: r.blame_field,
          code: r.code,
          confidence: r.confidence,
          importance: r.importance,
          message: r.message,
          title: r.title
        })),
        impressions: a.lifetime_imps,
        status: {
          configured: a.configured_status,
          effective: a.effective_status,
          status: a.status
        },
        promotedObject: {
          type: 'Page',
          data: a.promoted_object.page_id
        },
        target: {
          age: {
            max: a.targeting.age_max,
            min: a.targeting.age_min
          },
          geoLocations: {
            countries: a.targeting.geo_locations.countries,
            locationTypes: a.targeting.geo_locations.location_types
          },
          platforms: a.targeting.platforms
        }
      }));
    }
  },
  FacebookAdSet: {
    ads: (adSet) => {
      let ads = Meteor.call('fb-marketing-ads-from-adset', adSet.ibolAccount, adSet._id);
      return ads.data.map(a => ({
        _id: a.id,
        name: a.name,
        status: a.status,
        adSet: a.adset_id,
        creative: []
      }));
    }
  },
  FacebookAd: {
    creative: (ad) => {
      let creatives = Meteor.call('fb-marketing-adCreative-from-ad', ad.ibolAccount, ad._id);
      return creatives.data.map(a => ({
        _id: a.id,
        body: a.body,
        image: a.image_url,
        link: a.link_url,
        ctaType: a.call_to_action_type,
        title: a.title
      }));
    }
  }
};

