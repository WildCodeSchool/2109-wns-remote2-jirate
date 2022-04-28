import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { performAstCodegen } from '@src/codegen';
import schema from '@src/graphql/schema/schema';
import prismaContext from '@src/lib/prisma/prismaContext';

dotenv.config();

const startServer = async () => {
  performAstCodegen();
  const app: express.Application = express();

  const apolloServerConfig = {
    schema,
    playground: process.env.NODE_ENV !== 'production',
    context: ({ req, res }) => {
      prismaContext;
      return {
        req,
        res,
      };
    },
  };

  const server = new ApolloServer(apolloServerConfig);
  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT;

  app.listen({ port: PORT || 5000 }, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  });
};
startServer();
