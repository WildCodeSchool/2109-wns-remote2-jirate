import { GraphQLObjectType } from 'graphql';
import createUserMutation from '../resolvers/mutation/User/createUserMutation';
import createProjectMutation from '../resolvers/mutation/Project/createProjectMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
    createProject: createProjectMutation,
  },
});

export default mutationType;
