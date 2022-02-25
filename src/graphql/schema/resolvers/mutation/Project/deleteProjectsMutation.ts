import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Project } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { deleteProjectsById } from '@src/service/projectService';
import ProjectsType from '@src/graphql/schema/typedefs/Projects/ProjectsType';
import DeleteProjectsInput from '@src/graphql/schema/inputs/DeleteProjectsInput';

interface Count {
  count: number;
}

export const deleteProjectsMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { ids } },
  _context,
  _info
): Promise<Count> => {
  return deleteProjectsById(ids);
};

const deleteProjectsMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Delete project',
  type: ProjectsType,
  args: {
    input: {
      type: DeleteProjectsInput,
    },
  },
  resolve: deleteProjectsMutationResolver,
};

export default deleteProjectsMutation;
