import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Project } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getProjectsByUser } from '@src/service/projectService';
import ProjectType from '@src/graphql/schema/typedefs/Project/ProjectType';
import GetProjectsByUserIdInput from '@src/graphql/schema/inputs/GetProjectsByUserIdInput';

export const getProjectsByUserIdMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { userId } },
  _context,
  _info
): Promise<Project[]> => {
  return getProjectsByUser(userId);
};

const getProjectsByUserIdProjectMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'get all projects by user',
  type: GraphQLList(ProjectType),
  args: {
    input: {
      type: GetProjectsByUserIdInput,
    },
  },
  resolve: getProjectsByUserIdMutationResolver,
};

export default getProjectsByUserIdProjectMutation;
