import Accounts from '../../accounts/definitions/account';

const Campaign = `
type Campaign {
    _id: String,
    owner: User,
    manager: User,
    shares: [User],
    status: String,
    information: CampaignInformation,
    messages: [CampaignMessage],
    gallery: CampaignGallery
}
`;

const CampaignGallery = `
type CampaignGallery {
    images: [CampaignGalleryFolder],
    videos: [CampaignGalleryFolder]
}
`;

const CampaignGalleryFolder = `
type CampaignGalleryFolder {
    name: String,
    content: [String]
}
`;

const CampaignInformation = `
type CampaignInformation {
    profile: String,
    cover: String,
    name: String,
    brands: [Account],
    conquer: [String],
    dateStart: String,
    dateEnd: String,
    description: String,
    url: String,
    objectives: CampaignInformationObjectives
} 
`;

const CampaignInformationObjectives = `
type CampaignInformationObjectives {
    increaseFollowers: Boolean,
    increaseViews: Boolean,
    increaseShares: Boolean,
    increaseEngagement: Boolean,
    increaseLikes: Boolean,
    increaseTrafficHours: Boolean,
    reachNewMarkets: Boolean,
    increaseSpeaking: Boolean,
    increasePlays: Boolean,
    increaseWebsiteTraffic: Boolean,
    positionTarget: Boolean,
    keepTarget: Boolean,
    presence: Boolean,
    positionNewMarkets: Boolean,
    
}   
`;

const CampaignInformationHashtags = `
type CampaignInformationHashtags {
    main: [String],
    secondary: [String]
}
`;

const CampaignMessage = `
type CampaignMessage {
    _id: String,
    message: String,
    media: String,
    hashtags: [String]
}
`;

export default [Campaign, CampaignInformation, CampaignInformationObjectives, CampaignGallery, CampaignGalleryFolder, CampaignInformationHashtags, CampaignMessage, ...Accounts];
