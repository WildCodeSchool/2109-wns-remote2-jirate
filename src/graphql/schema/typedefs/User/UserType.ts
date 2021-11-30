import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import ProjectType from "../Project/ProjectType";

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'id of user',
    },
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
    projects: {
      type: GraphQLList(ProjectType),
      description: 'list of authors books',
    },
  }),
});

export default UserType;
