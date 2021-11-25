import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Project } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createProject } from '@src/service/projectService';
import ProjectType from '@src/graphql/schema/typedefs/Project/ProjectType';
import CreateProjectInput from '@src/graphql/schema/inputs/CreateProjectInput';

export const createUserMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { name, token, userId } },
  _context,
  _info
): Promise<Project> => {
  return createProject(name, token, userId);
};

const createProjectMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Create user',
  type: ProjectType,
  args: {
    input: {
      type: CreateProjectInput,
    },
  },
  resolve: createProjectMutationResolver,
};

export default createProjectMutation;
