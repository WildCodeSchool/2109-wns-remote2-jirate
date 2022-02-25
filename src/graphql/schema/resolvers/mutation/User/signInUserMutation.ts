import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { User } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { SignIn } from '@src/service/userService';
import UserType from '@src/graphql/schema/typedefs/User/UserType';
import SignInUserInput from '@src/graphql/schema/inputs/SignInUserInput';

export const signInUserMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { email, password } },
  _context,
  _info
): Promise<User> => {
  return SignIn(email, password);
};

const signInUserMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'SignIn user',
  type: UserType,
  args: {
    input: {
      type: SignInUserInput,
    },
  },
  resolve: signInUserMutationResolver,
};

export default signInUserMutation;
