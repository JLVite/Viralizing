const AccountInvite = `
type AccountInvite {
    _id: String,
    account: Account,
    email: String,
    sent: String,
    owner: User,
    status: String,
    type: String
}
`;

export default [AccountInvite];