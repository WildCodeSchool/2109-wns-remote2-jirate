import { GraphQLResolverMap } from 'apollo-graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { Project, User } from '@prisma/client';
import mutation from '@src/graphql/schema/resolvers/mutation/mutation';
import query from '@src/graphql/schema/resolvers/query/query';
import { getUserById } from '@src/service/userService';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Project: {
    user(project: Project): Promise<User | null> {
      return getUserById(project.userId);
    },
  },
};

export default resolvers;
