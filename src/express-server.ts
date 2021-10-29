import express, { Application } from 'express';
import cors from 'cors';

import { getApolloServer } from './apollo-server';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';

export const getExpressServer = async (): Promise<{
  expressServer: Application;
  apolloServer: ApolloServer;
  graphQLSchema: GraphQLSchema;
}> => {
  const { apolloServer, graphQLSchema } = await getApolloServer();

  const expressServer = express();
  if (process.env.NODE_ENV === 'dev') {
    expressServer.use(cors());
  }
  apolloServer.applyMiddleware({ app: expressServer });

  return { expressServer, apolloServer, graphQLSchema };
};
