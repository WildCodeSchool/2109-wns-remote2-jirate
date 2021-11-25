import { getAllUsersQueryResolver } from '@src/graphql/schema/resolvers/query/User/getAllUsersQuery';
import { getAllProjectsQueryResolver } from '@src/graphql/schema/resolvers/query/Project/getAllProjectsQuery';

const query = {
  users: {
    resolve: getAllUsersQueryResolver,
  },
  projects: {
    resolve: getAllProjectsQueryResolver,
  },
};

export default query;
