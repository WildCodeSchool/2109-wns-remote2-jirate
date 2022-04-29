import { createUserMutationResolver } from '@src/graphql/schema/resolvers/mutation/User/createUserMutation';
import { signInUserMutationResolver } from '@src/graphql/schema/resolvers/mutation/User/signInUserMutation';
import { createProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/createProjectMutation';
import { deleteProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/deleteProjectMutation';
import { updateProjectMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/updateProjectMutation';
import { deleteProjectsMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/deleteProjectsMutation';
import { getProjectsByUserIdMutationResolver } from '@src/graphql/schema/resolvers/mutation/Project/getProjectsByUserIdMutation';

const mutation = {
  createUser: {
    resolve: createUserMutationResolver,
  },
  signInUser: {
    resolve: signInUserMutationResolver,
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
  deleteProjects: {
    resolve: deleteProjectsMutationResolver,
  },
  getProjectsByUserId: {
    resolve: getProjectsByUserIdMutationResolver,
  },
};

export default mutation;
