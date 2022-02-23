import { createUserMutationResolver } from '@src/graphql/schema/resolvers/mutation/User/createUserMutation';
import { createProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/createProjectMutation';
import { deleteProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/deleteProjectMutation';
import { updateProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/updateProjectMutation';

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
  updateProject: {
    resolve: updateProjectMutationResolver,
  },
};

export default mutation;
