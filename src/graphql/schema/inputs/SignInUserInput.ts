import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const SignInUserInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'SignInInput',
  description: 'SignIn user input',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The user email for signIn',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The user password for signIn',
    },
  },
});

export default SignInUserInput;
