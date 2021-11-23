import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { User } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createUser } from '@src/service/userService';
import UserType from '@src/graphql/schema/typedefs/User/UserType';
import CreateUserInput from '@src/graphql/schema/inputs/CreateUserInput';

export const createUserMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { firstname, lastname, email, password } },
  _context,
  _info
): Promise<User> => {
  return createUser(firstname, lastname, email, password);
};

const createUserMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Create user',
  type: UserType,
  args: {
    input: {
      type: CreateUserInput,
    },
  },
  resolve: createUserMutationResolver,
};

export default createUserMutation;
