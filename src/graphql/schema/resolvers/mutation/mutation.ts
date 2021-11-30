import { createUserMutationResolver } from '@src/graphql/schema/resolvers/mutation/User/createUserMutation';
import { createProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/createProjectMutation';
import { deleteProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/deleteProjectMutation';

const mutation = {
  createUser: {
    resolve: createUserMutationResolver,
  },
  createProject: {
    resolve: createProjectMutationResolver,
  },
  deleteProject: {
    resolve: deleteProjectMutationResolver,
  },
};

export default mutation;
