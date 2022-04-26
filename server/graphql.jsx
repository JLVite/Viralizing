import { createApolloServer } from 'meteor/apollo';
import { merge } from 'lodash';

import schema from '../imports/server/schemas/schema';

createApolloServer({
  schema,
});
