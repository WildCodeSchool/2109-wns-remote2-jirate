import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const DeleteProjectInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'DeleteProjectInput',
  description: 'Delete user input',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project id',
    },
  },
});

export default DeleteProjectInput;
