import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Project } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllProjects } from '@src/service/projectService';
import ProjectType from '@src/graphql/schema/typedefs/Project/ProjectType';

export const getAllProjectsQueryResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  _args,
  { req },
  _info
): Promise<Project[]> => {
  const projects = await getAllProjects(req);
  return projects;
};

const getAllProjectsQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all projects query',
  type: GraphQLList(ProjectType),
  resolve: getAllProjectsQueryResolver,
};

export default getAllProjectsQuery;
