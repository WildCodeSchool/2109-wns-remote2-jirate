import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { performAstCodegen } from '@src/codegen';
import schema from '@src/graphql/schema/schema';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import prismaContext from '@src/lib/prisma/prismaContext';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const apolloServerContext: IApolloServerContext = {
    prismaContext,
  };

  const apolloServerConfig = {
    schema,
    playground: process.env.NODE_ENV !== 'production',
    context: apolloServerContext,
  };

  const server = new ApolloServer(apolloServerConfig);

  server
    .listen()
    .then(({ url }) => {
      // eslint-disable-next-line no-console
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log('Error launching server', err));
};

startServer();
