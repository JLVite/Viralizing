const Query = `
type Query {
  user: User
  campaignInviteSentCount(_id: String): Int
  campaignInviteSent(_id: String): CampaignInviteSent
  getNews(lang: String!): [News]
  account(_id: String): Account
  accountsOwnSearch(query: String): [Account]
  accountsByTag(tag: String): [Account]
  accounts: [Account]
  accountInvite(inviteID: String!): AccountInvite
  accountInvites(accountID: String!): [AccountInvite]
  accountFBPages(accountID: String!): [FBPage]
  accountFBGroups(accountID: String!): [FBGroup]
  accountsTeamAttack(action_type: String,results_order: String, influencer_networks: [String], influencer_gender: String, influencer_age: RangeQuery, influencer_country: [String], influencer_languages: String, influencer_city: [String], influencer_likes: RangeQuery, influencer_followers: RangeQuery, influencer_views: RangeQuery, influencer_engagement: RangeQuery, influencer_followers: RangeQuery, audience_gender: String, audience_age: RangeQuery, audience_nrssg: String, audience_country: [String]): [Account]
  postsOwn: [Post]
  reportsOwn: [Report]
  report(reportId: String!): Report
  postsInvite(campaignID: String!, inviteID: String!): [Post]
  campaign(_id: String!): Campaign
  campaignInviteSentOwn: [CampaignInviteSent]
  campaignsOwn: [Campaign]
  campaignsPartOf: [Campaign]
  campaignInvite(inviteID: String!): CampaignInvite
  campaignInvites(campaignID: String!): [CampaignInvite]
  teamAttacksOwn: [TeamAttack]
  teamAttack(_id: String!): TeamAttack
  paymentsOwn(year:String, month:String, accounts:[String]): [Payment]
  woeidPlaces: [TwitterTrendingPlace]
  twitterTrends(woeid: String!): [TwitterTrends]
  eventsOwn(all: Boolean, created:Boolean, paused:Boolean, active:Boolean, drafts:Boolean, posts:Boolean, networks:[String]): [Event]
  eventsCampaign(campaignID: String, all: Boolean, draft: Boolean, pending: Boolean, sent: Boolean, accepted: Boolean,  rejected: Boolean, scheduled: Boolean, published: Boolean, completed: Boolean, cancelled: Boolean, suspended: Boolean): [Event]
  eventsAccount(accountID: String, all: Boolean, draft: Boolean, pending: Boolean, sent: Boolean, accepted: Boolean,  rejected: Boolean, scheduled: Boolean, published: Boolean, completed: Boolean, cancelled: Boolean, suspended: Boolean): [Event]
  invitesCampaign(campaignID: String): [Invite]
  search(query:String, twitter: Boolean, instagram: Boolean, google: Boolean): [SearchItem]
  facebookAdAccounts(socialAccountID: String): [FacebookAccount]
  facebookAdsCampaigns(socialAccountID: String, adAccountID: String): [FacebookCampaign]
  facebookAdsCampaign(socialAccountID: String, adAccountID: String, campaignID: String): FacebookCampaign
  facebookAdsCampaignsAdSets(socialAccountID: String, adAccountID: String, campaignID: String): [FacebookAdSet]
  facebookAdsCampaignsAdSetAds(socialAccountID: String, adAccountID: String, campaignID: String, adSetID: String): [FacebookAd]
  facebookAdsCampaignsAdSetAd(socialAccountID: String, adAccountID: String, campaignID: String, adID: String): FacebookAd
  facebookAdsCampaignsAudienceEstimate(socialAccountID: String, adID: String, data: FacebookAdsCampaignsAudienceEstimate): FacebookAudience
  facebookAdsCampaignsDeliveryEstimate(socialAccountID: String, adID: String, data: FacebookAdsCampaignsDeliveryEstimate): FacebookDeliveryEstimate
}
`;

export default Query;
