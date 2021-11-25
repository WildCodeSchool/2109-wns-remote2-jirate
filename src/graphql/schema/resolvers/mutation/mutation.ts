import { createUserMutationResolver } from '@src/graphql/schema/resolvers/mutation/User/createUserMutation';

const mutation = {
  createUser: {
    resolve: createUserMutationResolver,
  },
};

export default mutation;
