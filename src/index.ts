import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { performAstCodegen } from '@src/codegen';
import apolloServerConfig from '@src/lib/config/apolloServerConfig';

dotenv.config();

const startServer = () => {
  performAstCodegen();

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
