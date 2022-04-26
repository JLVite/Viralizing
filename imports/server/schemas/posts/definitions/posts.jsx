const PostAccount = `
type PostAccount {
    _id: String,
    name: String,
    lastName: String,
    avatar: String,
    network: String,
    fullProfile: Account
}
`;

const PostData = `
type PostData {
    message: String,
    media: String,
    location: String
}
`;

const Post = `
type Post {
    _id: String,
    status: String,
    type: String,
    date: String,
    deadline: String,
    campaign: String,
    invite: String,
    isPaid: Boolean,
    useHashtag: Boolean
    account: PostAccount,
    owner: User,
    data: PostData
}
`;

export default [Post, PostData, PostAccount];