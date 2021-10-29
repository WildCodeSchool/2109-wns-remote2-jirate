import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';

import { getExpressServer } from './express-server';
import { SubscriptionServer } from 'subscriptions-transport-ws';

const app = async () => {
  const connectionOptions = await getConnectionOptions();
  await createConnection({
    ...connectionOptions,
    synchronize: true,
    entities: ['dist/models/*.js']
  });

  const { expressServer, apolloServer, graphQLSchema } = await getExpressServer();

  const server = createServer(expressServer);

  server.listen(8000, () => {
    console.log(`🚀 Server ready at http://localhost:8000${apolloServer.graphqlPath}`);
    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer({ execute, subscribe, schema: graphQLSchema }, { server, path: apolloServer.graphqlPath });
  });
};

app();
