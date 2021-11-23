import { GraphQLObjectType, GraphQLString } from 'graphql';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    firstname: {
      type: GraphQLString,
      description: 'firstname of user',
    },
    lastname: {
      type: GraphQLString,
      description: 'lastname of user',
    },
    email: {
      type: GraphQLString,
      description: 'email of user',
    },
    password: {
      type: GraphQLString,
      description: 'password of user',
    },
  }),
});

export default UserType;
