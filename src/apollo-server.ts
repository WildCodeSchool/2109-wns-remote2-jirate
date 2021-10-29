import { ApolloServer } from 'apollo-server-express';
import { Request, Response } from 'express';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';

import User from './models/User';

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
