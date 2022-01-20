import { GraphQLObjectType, GraphQLString, GraphQLScalarType, Kind } from 'graphql';
import UserType from '@src/graphql/schema/typedefs/User/UserType';

const ProjectType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Project',
  description: 'A project',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'name of project',
    },
    name: {
      type: GraphQLString,
      description: 'name of project',
    },
    token: {
      type: GraphQLString,
      description: 'token of invite user',
    },
    user: {
      type: UserType,
      description: 'user of project',
    },
    userId: {
      type: GraphQLString,
      description: 'userId of project',
    },
    createdAt: {
      type: dateScalar,
      description: 'created date of project',
    },
    updatedAt: {
      type: dateScalar,
      description: 'created date of project',
    },
  }),
});

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});

export default ProjectType;
