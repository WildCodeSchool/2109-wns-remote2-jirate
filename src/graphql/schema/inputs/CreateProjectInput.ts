import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

const CreateProjectInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateProjectInput',
  description: 'Create user input',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project name',
    },
    token: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project token',
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project token',
    },
    limitCollaborators: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The project numbers of maximum Collaborators',
    },
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project userId',
    },
  },
});

export default CreateProjectInput;
