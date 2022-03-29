import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { performAstCodegen } from '@src/codegen';
import schema from '@src/graphql/schema/schema';
import corsOptions from './config/corsOptions';
// import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import prismaContext from '@src/lib/prisma/prismaContext';
import getUser from '@src/lib/utils/authContext';

dotenv.config();

const startServer = async () => {
  performAstCodegen();

  const apolloServerConfig = {
    schema,
    playground: process.env.NODE_ENV !== 'production',
    context: ({ req, res }) => {
      prismaContext;
      const user = getUser(req);
      console.log('AUTHORIZE USER', user);
      return {
        user,
        req,
        res,
      };
    },
  };

  const server = new ApolloServer(apolloServerConfig);
  await server.start();
  const app: express.Application = express();

  server.applyMiddleware({ app });
  app.listen({ port: 8000 }, () => {
    console.log(`🚀 Server ready at http://localhost:${8000}${server.graphqlPath}`);
  });
};
startServer();
