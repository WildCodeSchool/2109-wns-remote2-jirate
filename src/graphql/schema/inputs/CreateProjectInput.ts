import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

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
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The project userId',
    },
  },
});

export default CreateProjectInput;
