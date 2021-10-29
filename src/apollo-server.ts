import { ApolloServer } from 'apollo-server';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';

import User from './resolvers/UserResolver';

export const getApolloServer = async (): Promise<{
  apolloServer: ApolloServer;
  graphQLSchema: GraphQLSchema;
}> => {
  const schema = await buildSchema({
    resolvers: [User] // add resolvers in array
  });
  return {
    apolloServer: new ApolloServer({ schema }),
    graphQLSchema: schema
  };
};
