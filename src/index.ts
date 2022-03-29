import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { performAstCodegen } from '@src/codegen';
import schema from '@src/graphql/schema/schema';
// import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import prismaContext from '@src/lib/prisma/prismaContext';
import authContext from '@src/lib/utils/authContext';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const apolloServerConfig = {
    schema,
    playground: process.env.NODE_ENV !== 'production',
    context: req => {
      prismaContext;
      authContext(req);
    },
  };

  const server = new ApolloServer(apolloServerConfig);

  server
    .listen({ port: 8000 })
    .then(({ url }) => {
      // eslint-disable-next-line no-console
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log('Error launching server', err));
};

startServer();
