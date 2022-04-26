const FacebookAccount = `
type FacebookAccount {
    _id: String,
    status: Int,
    name: String,
    money:FacebookAccountMoney,
    endAdvertiser: FacebookAccountEndAdvertiser,
    created: String,
    business: FacebookAccountBusiness
}
`;

const FacebookAccountMoney = `
type FacebookAccountMoney {
    spent: String,
    balance: String,
    currency: String
}
`;

const FacebookAccountBusiness = `
type FacebookAccountBusiness {
    _id: String,
    name: String
}
`;

const FacebookAccountEndAdvertiser = `
type FacebookAccountEndAdvertiser {
    _id: String,
    name: String
}
`;

const FacebookCampaign = `
type FacebookCampaign {
    _id: String,
    name: String,
    account: FacebookAccount,
    buyingType: String,
    objective: String,
    status: FacebookCampaignStatus,
    created: String,
    updated: String,
    spendCap: String,
    startDate: String,
    endDate: String,
    adSets: [FacebookAdSet]
}
`;

const FacebookCampaignStatus = `
type FacebookCampaignStatus {
    configured: String,
    effective: String,
    status: String
}
`;

const FacebookAdSet = `
type FacebookAdSet {
    _id: String
    name: String,
    account: FacebookAccount,
    campaign: FacebookCampaign,
    created: String,
    updated: String,
    status: FacebookAdSetStatus,
    money: FacebookAdSetMoney,
    billingEvent: String,
    goal: String,
    startDate: String,
    endDate: String,
    recommendations: [FacebookAdSetRecommendation],
    impressions: String,
    promotedObject: FacebookAdSetPromotedObject,
    targeting: FacebookAdSetTarget,
    ads:[FacebookAd]
}
`;

const FacebookAdSetTarget = `
type FacebookAdSetTarget {
    user_os: [String],
    user_device: [String],
    facebook_positions: [String],
    age_max: String,
    age_min: String,
    geo_locations: FacebookAdSetTargetGeoLocations,
    publisher_platforms: [String]
}
`;

const FacebookAdSetTargetGeoLocations = `
type FacebookAdSetTargetGeoLocations {
    countries: [String],
    locationTypes: [String]
}
`;

const FacebookAdSetPromotedObject = `
type FacebookAdSetPromotedObject {
    type: String,
    data: String
}
`;

const FacebookAdSetStatus = `
type FacebookAdSetStatus {
    configured: String,
    effective: String,
    status: String
}
`;

const FacebookAdSetRecommendation = `
type FacebookAdSetRecommendation {
    field: String,
    code: String,
    confidence: String,
    importance: String,
    message: String,
    title: String
}
`;

const FacebookAdSetMoney = `
type FacebookAdSetMoney {
    autoBid: Boolean,
    avgPrizePaceing: Boolean,
    budget: FacebookAdSetMoneyBudget
}
`;

const FacebookAdSetMoneyBudget = `
type FacebookAdSetMoneyBudget {
    daily: String,
    lifetime: String,
    remaining: String
}
`;

const FacebookAd = `
type FacebookAd {
    _id: String
    name: String,
    status: FacebookAdStatus,
    adSet: FacebookAdSet,
    campaign: FacebookCampaign,
    created: String,
    updated: String,
    creative:[FacebookAdCreative],
    reviewFeedback: String
}
`;

const FacebookAdStatus = `
type FacebookAdStatus {
    configured: String,
    effective: String,
    status: String
}
`;

const FacebookAdCreative = `
type FacebookAdCreative {
    _id: String
    title: String,
    body: String,
    image: String,
    link: String,
    object: FacebookAdCreativeObject,
    ctaType: String
}
`;

const FacebookAdCreativeObject = `
type FacebookAdCreativeObject {
    type: String,
    data: String
}
`;

const FacebookAudience = `
type FacebookAudience {
    users: Int,
    estimate_ready: Boolean
}
`;

const FacebookAdsCampaignAudienceEstimateTargetingSpecCountries = `
input FacebookAdsCampaignAudienceEstimateTargetingSpecCountries {
    countries: [String]
}
`;

const FacebookAdsCampaignAudienceEstimateTargetingSpec = `
input FacebookAdsCampaignAudienceEstimateTargetingSpec {
    geo_locations: FacebookAdsCampaignAudienceEstimateTargetingSpecCountries,
    age_min: Int,
    age_max: Int
}
`;

const FacebookAdsCampaignsAudienceEstimate = `
input FacebookAdsCampaignsAudienceEstimate {
    currency: String,
    optimize_for: String,
    targeting_spec: FacebookAdsCampaignAudienceEstimateTargetingSpec
}
`;

const FacebookDeliveryEstimateBind_Est = `
type FacebookDeliveryEstimateBind_Est {
    min_bid: Int,
    median_bid: Int,
    max_bid: Int,
}
`;

const FacebookDeliveryEstimateDaily_out = `
type FacebookDeliveryEstimateDaily_out {
    spend: Int,
    reach: Int,
    impressions: Int,
    actions: Int
}
`;

const FacebookDeliveryEstimate = `
type FacebookDeliveryEstimate {
    bid_estimate: FacebookDeliveryEstimateBind_Est,
    daily_outcomes_curve: [FacebookDeliveryEstimateDaily_out],
    estimate_dau: Int,
    estimate_mau: Int,
    estimate_ready: Boolean
}
`;

const FacebookAdsCampaignsDeliveryEstimateGeolocations = `
input FacebookAdsCampaignsDeliveryEstimateGeolocations {
    country_groups: [String]
}
`;

const FacebookAdsCampaignsDeliveryEstimateTargeting_Spec = `
input FacebookAdsCampaignsDeliveryEstimateTargeting_Spec {
    geo_locations: FacebookAdsCampaignsDeliveryEstimateGeolocations,
    user_device: [String],
    user_os: [String]
}
`;

const FacebookAdsCampaignsDeliveryEstimate = `
input FacebookAdsCampaignsDeliveryEstimate {
    targeting_spec: FacebookAdsCampaignsDeliveryEstimateTargeting_Spec,
    optimization_goal: String
}
`;

export default [FacebookAccount, FacebookAccountMoney, FacebookAccountBusiness, FacebookAccountEndAdvertiser, FacebookCampaign, FacebookCampaignStatus, FacebookAdSet, FacebookAdSetTarget, FacebookAdSetTargetGeoLocations, FacebookAdSetPromotedObject, FacebookAdSetStatus, FacebookAdSetRecommendation, FacebookAdSetMoney, FacebookAdSetMoneyBudget, FacebookAd, FacebookAdCreative, FacebookAdCreativeObject, FacebookAdStatus, FacebookAudience, FacebookAdsCampaignsAudienceEstimate, FacebookAdsCampaignAudienceEstimateTargetingSpec, FacebookAdsCampaignAudienceEstimateTargetingSpecCountries, FacebookAdsCampaignsDeliveryEstimateGeolocations, FacebookAdsCampaignsDeliveryEstimateTargeting_Spec, FacebookAdsCampaignsDeliveryEstimate, FacebookDeliveryEstimateBind_Est, FacebookDeliveryEstimateDaily_out, FacebookDeliveryEstimate];
