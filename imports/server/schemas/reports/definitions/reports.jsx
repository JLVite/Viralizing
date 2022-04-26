const Report = `
type Report {
    _id: String,
    name: String,
    owner: User
    items: [ReportItem]
}
`;

const ReportItem = `
type ReportItem {
    name: String,
    Description: String,
    type: String,
    size: String,
    source: ReportItemSource
}
`;

const ReportItemSource = `
type ReportItemSource {
    type: String,
    account: Account,
    campaign: Campaign
}
`;

export default [Report, ReportItem, ReportItemSource];