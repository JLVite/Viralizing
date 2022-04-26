export default {
  status: 'draft', //draft, scheduled, rejected, paid, completed
  from: null,
  to: null,
  campaign: null,
  amount: null,
  date: new Date(),
  paymentMethod: {
    brand: null,
    last4: null
  }
};
