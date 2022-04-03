import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

const ProjectsType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Projects',
  description: 'An array of projects ids',
  fields: () => ({
    ids: {
      type: GraphQLList(GraphQLString),
      description: 'id of projects',
    },
  }),
});

export default ProjectsType;