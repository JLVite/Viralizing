const FBPage = `
type FBPage {
    id: String,
    name: String,
    category: String,
    perms: [String],
    picture: String
}
`;

const FBGroup = `
type FBGroup {
    id: String,
    name: String,
    email: String,
    perms: [String],
    icon: String
}
`;

export default [FBPage, FBGroup];
