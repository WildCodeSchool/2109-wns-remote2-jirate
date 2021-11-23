import { GraphQLObjectType } from 'graphql';
import getAllUsersQuery from '@src/graphql/schema/resolvers/query/User/getAllUsersQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: getAllUsersQuery,
  },
});

export default queryType;
