import { GraphQLObjectType } from 'graphql';
import createUserMutation from '../resolvers/mutation/User/createUserMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
  },
});

export default mutationType;
