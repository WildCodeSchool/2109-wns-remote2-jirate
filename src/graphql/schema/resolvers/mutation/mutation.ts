import { createUserMutationResolver } from '@src/graphql/schema/resolvers/mutation/User/createUserMutation';
import { createProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/createProjectMutation';

const mutation = {
  createUser: {
    resolve: createUserMutationResolver,
  },
  createProject: {
    resolve: createProjectMutationResolver,
  },
};

export default mutation;
