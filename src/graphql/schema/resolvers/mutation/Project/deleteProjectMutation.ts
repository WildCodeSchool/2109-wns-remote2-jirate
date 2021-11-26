import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Project } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { deleteProjectById } from '@src/service/projectService';
import ProjectType from '@src/graphql/schema/typedefs/Project/ProjectType';
import DeleteProjectInput from '@src/graphql/schema/inputs/DeleteProjectInput';

export const deleteProjectMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { id } },
  _context,
  _info
): Promise<Project> => {
  return deleteProjectById(id);
};

const deleteProjectMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Delete project',
  type: ProjectType,
  args: {
    input: {
      type: DeleteProjectInput,
    },
  },
  resolve: deleteProjectMutationResolver,
};

export default deleteProjectMutation;
