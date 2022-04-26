export default {
  network: '',
  manager: '',
  type: 'account',
  shares: [],
  suspended: false,
  active: false,
  delete: false,
  connection: {},
  settings: {
    type: {
      brand: false,
      influencer: false
    }
  },
  information: {
    name: '',
    lastName: '',
    avatar: '',
    gender: '',
    birthDate: null,
    country: '',
    city: '',
    maritalStatus: '',
    forbiddenSubjects: [],
    sexualOrientation: '',
    likes: [],
    language: '',
    description: '',
    categories: [],
    specialties: [],
    urls: []
  },
  audience: {
    targets: [],
    conquer: [],
    objectives: {
      increaseFollowers: false,
      increaseViews: false,
      increaseShares: false,
      increaseEngagement: false,
      increaseLikes: false,
      increaseTrafficHours: false,
      reachNewMarkets: false,
      increaseSpeaking: false,
      increasePlays: false,
      increaseWebsiteTraffic: false,
      positionTarget: false,
      keepTarget: false,
      presence: false,
      positionNewMarkets: false,
    }
  },
  pricing: {
    post: '',
    profilePicture: '',
    coverPhoto: '',
    noPostHour: '',
    noPostDay: '',
    share: '',
    partnership: '',
    ambassador: ''
  },
  gallery: {
    images: [],
    videos: []
  },
  groups: []
};
