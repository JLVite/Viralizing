import User from '../../users/definitions/users';

const Account = `
type Account {
    _id: String,
    suspended: Boolean,
    type: String,
    active: Boolean,
    delete: Boolean,
    network: String,
    manager: User,
    owner: User,
    shares: [User],
    connection: Connection,
    settings: AccountSettings,
    information: AccountInformation,
    audience: AccountAudience,
    pricing: AccountPricing,
    gallery: AccountGallery,
    groups: [String],
    statistics: AccountStatistics,
    campaignsCount: Int
}
`;

const AccountGallery = `
type AccountGallery {
    images: [AccountGalleryFolder],
    videos: [AccountGalleryFolder]
}
`;

const AccountGalleryFolder = `
type AccountGalleryFolder {
    name: String,
    content: [String]
}
`;

const AccountStatistics = `
type AccountStatistics {
    retweets: String,
    retweetsPerPost: String,
    favorites: String,
    favoritesPerPost: String,
    comments: String,
    commentsPerPost: String,
    likes: String,
    likesPerPost: String,
    shares: String,
    sharesPerPost: String,
    engagement: String,
    followers: Int,
    following: String,
    profileLikes: String,
    posts: String,
    postsPerDay: String
}
`;

const AccountAudienceTarget = `
type AccountAudienceTarget {
    name: String,
    age: String,
    gender: String,
    nrssg: String,
    countries: [String],
    cities: [String],
    languages: String,
    description:String
}   
`;

const AccountAudienceObjectives = `
type AccountAudienceObjectives {
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

const AccountAudience = `
type AccountAudience {
    targets:[AccountAudienceTarget]
    conquer:[String],
    objectives: AccountAudienceObjectives
}   
`;

const Connection = `
type Connection {
    accessToken: String,
    id:String
}
`;

const AccountSettings = `
type AccountSettings {
    type: AccountsSettingsType
}   
`;

const AccountsSettingsType = `
type AccountsSettingsType {
    brand: Boolean,
    influencer: Boolean
}
`;

const AccountInformation = `
type AccountInformation {
    name: String,
    lastName: String,
    avatar: String,
    gender: String,
    birthDate: String,
    country: String,
    city: String,
    maritalStatus: String,
    forbiddenSubjects: [String],
    sexualOrientation: String,
    likes: [String],
    language: String,
    description: String,
    categories:[String],
    specialties:[String]
    urls: [String],
} 
`;

const AccountConceptSubjects = `
type AccountConceptSubjects {
    primary: [String],
    secondary: [String],
    forbidden: [String]
}
`;

const AccountPricing = `
type AccountPricing {
    post: String,
    profilePicture:String,
    coverPhoto:String,
    noPostHour:String,
    noPostDay:String,
    share: String,
    partnership: String,
    ambassador: String
}
`;

const AccountPricingPhotos = `
type AccountPricingPhotos {
    profile: String,
    cover: String
}

`;

const AccountPricingNoPost = `
type AccountPricingNoPost {
    hour: String,
    day: String
}
`;

const RangeQuery = `
input RangeQuery {
    min: String,
    max: String
}
`;

export default [Account, Connection, AccountGallery, AccountGalleryFolder, AccountAudience, AccountAudienceTarget, AccountAudienceObjectives, AccountSettings, AccountStatistics, AccountsSettingsType, AccountInformation, AccountConceptSubjects, AccountPricing, AccountPricingPhotos, AccountPricingNoPost, RangeQuery, ...User];
