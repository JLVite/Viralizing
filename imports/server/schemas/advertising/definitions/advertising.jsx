import User from '../../users/definitions/users';
import Campaign from '../../campaign/definitions/campaign';

const Advertising = `
type Advertising {
    campaign:Campaign
    network:String,
    message:CampaignMessage,
    budget:String
}
`;

export default [Advertising, ...Campaign];
