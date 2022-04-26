export default {
  isSuspended: false,
  profile: {
    avatar: null,
    name: null,
    lastName: null,
    phone: null,
    profile: null,
    settings: {
      notifications: {
        browser: true,
        email: false
      }
    },
    address: {
      address1: null,
      address2: null,
      city: null,
      state: null,
      zipCode: null,
      country: null
    },
    loginCount: 0,
    score: 0
  },
  stripe: {
    id: null
  },
  zendesk: {
    id: null
  },
  mixpanel: {
    id: null
  },
  subscription: {
    mainPlan: null
  },
  source: {
    type: null,
    id: null
  },
  flags: {
    hasShared: false,
    askedForCard: false,
    hasUpgraded: false,
    askedProfileData: false,
    prizes: {
      login: {
        _100: false,
        _1000: false,
        _10000: false
      }
    }
  }
};
