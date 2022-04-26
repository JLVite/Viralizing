const Event = `
type Event {
    _id: String,
    type: String,
    start: String,
    end: String,
    allDay: Boolean,
    title: String,
    preview: String,
    network: String,
    accountId: String
}
`;

export default [Event];
