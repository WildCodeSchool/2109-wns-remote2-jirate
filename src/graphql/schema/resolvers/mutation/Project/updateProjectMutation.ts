import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Project } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { updateProjectById } from '@src/service/projectService';
import ProjectType from '@src/graphql/schema/typedefs/Project/ProjectType';
import UpdateProjectInput from '@src/graphql/schema/inputs/UpdateProjectInput';

export const updateProjectMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  { input: { id, name, description, limitCollaborators } },
  { req },
  _info
): Promise<Project> => {
  return updateProjectById(id, name, description, limitCollaborators, req);
};

const updateProjectMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Update project',
  type: ProjectType,
  args: {
    input: {
      type: UpdateProjectInput,
    },
  },
  resolve: updateProjectMutationResolver,
};

export default updateProjectMutation;
