import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

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
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project description',
    },
    limitCollaborators: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The project limitCollaborators',
    },
  },
});

export default UpdateProjectInput;
