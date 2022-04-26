import { typeDefs, resolvers } from './bundle';
import { makeExecutableSchema } from 'graphql-tools';
import Query from './query';

const Schema = `
schema {
  query: Query
}
`;

export default makeExecutableSchema({
  typeDefs: [Query, Schema, ...typeDefs],
  resolvers
});
