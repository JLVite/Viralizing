import InviteMessage from '../../invites/definitions/invites';

const CampaignInviteSent = `
type CampaignInviteSent {
    _id: String,
    campaignId: String,
    accountId: String,
    ownerId: String,
    status: String,
    messages: [InviteMessage]

}
`;


export default [CampaignInviteSent, ...InviteMessage];
