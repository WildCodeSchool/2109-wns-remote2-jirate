import { GraphQLObjectType, GraphQLString } from 'graphql';

const ProjectType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Project',
  description: 'A project',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'name of project',
    },
    token: {
      type: GraphQLString,
      description: 'token of invite user',
    },
    userId: {
      type: GraphQLString,
      description: 'userId of project',
    },
  }),
});

export default ProjectType;
