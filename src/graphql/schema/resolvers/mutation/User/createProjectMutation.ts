import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Project } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createProject } from '@src/service/projectService';
import UserType from '@src/graphql/schema/typedefs/User/UserType';
import CreateUserInput from '@src/graphql/schema/inputs/CreateUserInput';

export const createUserMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { name, token, userId } },
  _context,
  _info
): Promise<Project> => {
  return createProject(name, token, userId);
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
