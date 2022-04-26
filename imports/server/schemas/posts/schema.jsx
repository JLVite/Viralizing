export default {
  status: 'draft', //draft, pending, sent, accepted, rejected, scheduled, published, completed, cancelled, suspended
  type: 'post', //post, share, noPost, profile, cover
  date: null,
  campaign: null, //Campaign ID
  invite: null, //Announcement ID
  isPaid: true,
  account: {
    id: null,
    name: null,
    lastName: null,
    avatar: null,
    network: null
  },
  owner: '',
  data: {
    message: '',
    media: null,
    location: null
  }
};
