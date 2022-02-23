import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const UpdateProjectInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'UpdateProjectInput',
  description: 'Update user input',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project id',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project name',
    },
    token: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project token',
    },
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project userId',
    },
  },
});

export default UpdateProjectInput;
