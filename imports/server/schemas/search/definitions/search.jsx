const SearchUser = `
type SearchUser {
    name: String,
    screenName: String,
    avatar: String
}
`;

const SearchMedia = `
type SearchMedia {
    type: String,
    url: String,
    preview: String
}
`;

const SearchItem = `
type SearchItem {
    link:String,
    title:String,
    date: String,
    description: String,
    network:String,
    media: SearchMedia,
    user: SearchUser
}
`;

const TwitterTrendingPlace = `
type TwitterTrendingPlace {
    country: String,
    name: String,
    countryCode: String,
    type: String,
    woeid: String,
    parent: String
}
`;

const TwitterTrends = `
type TwitterTrends {
    hashtag: String,
    url: String,
    promoted: String,
    volume: String
}
`;

export default [SearchItem, SearchUser, SearchMedia, TwitterTrendingPlace, TwitterTrends];
