const StripeCoupon = `
type StripeCoupon {
    id: String
    amount_off: String
    created: String
    currency: String
    duration: String
    duration_in_months: Int
    percent_off: Int
    redeem_by: String
    times_redeemed: Int
    valid: Boolean
}
`;

const UserCoupon = `
type UserCoupon {
    coupon: StripeCoupon
    start: String,
    end: String,
    subscription: String
}
`;

const StripeCard = `
type StripeCard {
    brand: String,
    country: String,
    id: String,
    last4: String
}
`;

const StripeBankAccount = `
type StripeBankAccount {
    name: String
    type: String,
    bank: String,
    country: String,
    currency: String,
    id: String,
    last4: String
}
`;

const StripeSubscriptionPlan = `
type StripeSubscriptionPlan {
    created: String,
    quantity: String,
    amount: Int,
    currency: String,
    name: String,
    interval: String,
    intervalCount: Int
}
`;

const StripeSubscription = `
type StripeSubscription {
    created: String,
    periodEnd: String,
    periodStart: String,
    id: String,
    quantity: String,
    startDate: String,
    trialStart: String,
    trialEnd: String,
    plans: [StripeSubscriptionPlan]
}
`;

const StripeCharge = `
type StripeCharge {
    id: String,
    amount: Int,
    refunded: Boolean,
    refundedAmount: Int,
    captured: Boolean,
    date: String,
    currency: String,
    description: String,
    dispute: String,
    failureCode: String,
    failureMessage: String,
    paid: Boolean,
    status: String,
    invoice: StripeInvoice
}
`;

const StripeInvoice = `
type StripeInvoice {
  id: String,
  amountDue: Int,
  attempts: Int,
  nextAttempt: String,
  charge: StripeCharge,
  closed: String,
  currency: String,
  date: String,
  description: String,
  discount: String,
  startingBalance: String,
  endingBalance: String,
  forgive: String,
  paid: String,
  periodEnd: String,
  periodStart: String,
  subtotal: Int,
  tax: String,
  taxPercent: Int,
  total: Int
}
`;

const StripeUser = `
type StripeUser {
    id: String, 
    balance: Int,
    created: String,
    currency: String,
    default_source: String,
    delinquent: Boolean,
    description: String,
    discount: UserCoupon,
    defaultCard: StripeCard
    cards: [StripeCard],
    banks: [StripeBankAccount],
    subscriptions: [StripeSubscription],
    invoices: [StripeInvoice],
    charges: [StripeCharge]
}
`;

const ZendeskComment = `
type ZendeskComment {
  id: String,
  author: ZendeskUser,
  body: String,
  channel: String,
  created: String
}
`;

const ZendeskUser = `
type ZendeskUser {
  id: String,
  email: String,
  name: String,
  role: String,
  created: String,
  updated: String,
  tags: String
}
`;

const ZendeskTicket = `
type ZendeskTicket {
  id:String,
  assignee:ZendeskUser,
  collaborators: [String],
  created: String,
  updated: String,
  priority: String,
  requester: ZendeskUser,
  satisfaction: String,
  status: String,
  subject: String,
  description: String,
  tags: [String],
  comments: [ZendeskComment]
}
`;

const UserSupport = `
type UserSupport {
  id: String,
  tickets: [ZendeskTicket]
}
`;

const UserEmail = `
type UserEmail {
  address: String
  verified: Boolean
}
`;
const UserProfile = `
type UserProfile {
    name: String,
    lastName: String,
    avatar: String
}
`;

const MixpanelEventProperties = `
type MixpanelEventProperties {
    browser: String,
    url: String,
    referrer: String
}
`;

const MixpanelEvent = `
type MixpanelEvent {
    id: String,
    name: String,
    created: String,
    properties: MixpanelEventProperties
}
`;

const PaypalAccount = `
type PaypalAccount {
    address: String,
    default: Boolean,
    created: String
}
`;

const User = `
type User {
  emails: [UserEmail]
  profile: UserProfile,
  stripe: StripeUser,
  support: UserSupport,
  events: [MixpanelEvent]
  _id: String,
  paypal: [PaypalAccount]
}
`;

export default [PaypalAccount, User, UserEmail, UserProfile, StripeUser, UserCoupon, StripeCoupon, StripeCard, StripeBankAccount, StripeSubscription, StripeSubscriptionPlan, StripeCharge, StripeInvoice, UserSupport, ZendeskTicket, ZendeskComment, ZendeskUser, MixpanelEvent, MixpanelEventProperties];
