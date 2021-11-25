import { GraphQLObjectType } from 'graphql';
import getAllUsersQuery from '@src/graphql/schema/resolvers/query/User/getAllUsersQuery';
import getAllProjectsQuery from '@src/graphql/schema/resolvers/query/Project/getAllProjectsQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: getAllUsersQuery,
    projects: getAllProjectsQuery,
  },
});

export default queryType;
