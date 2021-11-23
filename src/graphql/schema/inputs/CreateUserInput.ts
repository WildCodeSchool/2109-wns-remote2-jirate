import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateUserInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  description: 'Create user input',
  fields: {
    firstname: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The users firstname',
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The users lastname',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The users email',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The users password',
    },
  },
});

export default CreateUserInput;
