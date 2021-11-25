import { getAllUsersQueryResolver } from '@src/graphql/schema/resolvers/query/User/getAllUsersQuery';

const query = {
  users: {
    resolve: getAllUsersQueryResolver,
  },
};

export default query;
