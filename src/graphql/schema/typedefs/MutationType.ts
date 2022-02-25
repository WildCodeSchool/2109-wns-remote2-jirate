import { GraphQLObjectType } from 'graphql';
import createUserMutation from '../resolvers/mutation/User/createUserMutation';
import createProjectMutation from '../resolvers/mutation/Project/createProjectMutation';
import deleteProjectMutation from '../resolvers/mutation/Project/deleteProjectMutation';
import updateProjectMutation from '../resolvers/mutation/Project/updateProjectMutation';
import signInUserMutation from '../resolvers/mutation/User/signInUserMutation';
import deleteProjectsMutation from '../resolvers/mutation/Project/deleteProjectsMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
    createProject: createProjectMutation,
    deleteProject: deleteProjectMutation,
    updateProject: updateProjectMutation,
    signInUser: signInUserMutation,
    deleteProjects: deleteProjectsMutation,
  },
});

export default mutationType;
