const CampaignInvite = `
type CampaignInvite {
    _id: String,
    campaign: Campaign,
    email: String,
    sent: String,
    owner: User,
    status: String,
    type: String,
}
`;

export default [CampaignInvite];