import { GraphQLObjectType, GraphQLString } from 'graphql';
import UserType from '@src/graphql/schema/typedefs/User/UserType';

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
    user: {
      type: UserType,
      description: 'user of project',
    },
    userId: {
      type: GraphQLString,
      description: 'userId of project',
    },
  }),
});

export default ProjectType;
