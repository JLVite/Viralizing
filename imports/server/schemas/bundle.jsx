import { merge } from 'lodash';
import Users from './users/bundle';
import Accounts from './accounts/bundle';
import Posts from './posts/bundle';
import Campaign from './campaign/bundle';
import Events from './events/bundle';
import Invites from './invites/bundle';
import Advertising from './advertising/bundle';
import Search from './search/bundle';
import News from './news/bundle';
import TeamAttack from './team-attack/bundle';
import AccountInvites from './account-invites/bundle';
import CampaignInvites from './campaign-invites/bundle';
import Reports from './reports/bundle';
import FacebookAds from './facebook-ads/bundle';
import Payments from './payments/bundle';
import CampaignInviteSent from './campaign-invite-sent/bundle';

const typeDefs = [...CampaignInviteSent.definitions, ...Accounts.definitions, ...Posts.definitions, ...Campaign.definitions, ...Events.definitions, ...Invites.definitions, ...Advertising.definitions, ...Search.definitions, ...News.definitions, ...TeamAttack.definitions, ...AccountInvites.definitions, ...Reports.definitions, ...CampaignInvites.definitions, ...FacebookAds.definitions, ...Payments.definitions];
const resolvers = merge(CampaignInviteSent.resolvers, Accounts.resolvers, Users.resolvers, Posts.resolvers, Campaign.resolvers, Events.resolvers, Invites.resolvers, Advertising.resolvers, Search.resolvers, News.resolvers, TeamAttack.resolvers, AccountInvites.resolvers, Reports.resolvers, CampaignInvites.resolvers, FacebookAds.resolvers, Payments.resolvers);

export { typeDefs, resolvers };
