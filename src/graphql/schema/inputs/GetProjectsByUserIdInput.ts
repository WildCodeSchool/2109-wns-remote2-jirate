import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const GetProjectsByUserIdInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'GetProjectsByUserIdInput',
  description: 'Get projects by user id',
  fields: {
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User id',
    },
  },
});

export default GetProjectsByUserIdInput;
