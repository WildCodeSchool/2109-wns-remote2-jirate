import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql';

const DeleteProjectsInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'DeleteProjectsInput',
  description: 'Delete projects input',
  fields: {
    ids: {
      type: new GraphQLList(GraphQLString),
      description: 'The projects id',
    },
  },
});

export default DeleteProjectsInput;
