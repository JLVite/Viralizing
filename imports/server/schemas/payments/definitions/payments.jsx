const Payment = `
type Payment {
    _id: String,
    from: User,
    to: Account,
    campaign: Campaign,
    amount: String,
    date: String,
    status: String,
    type: String,
    paymentMethod: PaymentMethod,
    post: Post
}
`;

const PaymentMethod = `
type PaymentMethod {
    brand: String,
    last4: String
}
`;

export default [Payment, PaymentMethod];
