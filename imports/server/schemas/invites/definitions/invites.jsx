import Campaign from '../../campaign/definitions/campaign';

const InviteMessage = `
type InviteMessage {
    message: String,
    media: String,
    date: String,
    quantity: Int,
    location: String,
    type: String
}
`;

const InviteNetworks = `
type InviteNetworks {
    twitter: Boolean,
    facebook: Boolean,
    instagram: Boolean
}
`;

const Invite = `
type Invite {
    _id: String,
    createdAt:String,
    updatedAt:String,
    owner: User,
    campaign: Campaign,
    type: String,
    status: String, 
    deadline: String,
    influencers:[Account],
    teamAttacks: [TeamAttack],
    invitesAvailable:Int,
    invitesTaken: Int,
    budget: String,
    useHashtag: Boolean,
    options:[InviteMessage],
    networks: InviteNetworks
}
`;

export default [Invite, InviteMessage, InviteNetworks, ...Campaign];
