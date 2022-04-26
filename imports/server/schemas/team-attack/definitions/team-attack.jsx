const TeamAttack = `
type TeamAttack {
    _id: String,
    name: String,
    type: String,
    owner: User,
    action: String,
    members: [Account]
}
`;

export default [TeamAttack];