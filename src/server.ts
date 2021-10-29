import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { buildSchema } from 'type-graphql';

import { ApolloServer } from 'apollo-server';

import User from './resolvers/UserResolver';

const app = async () => {
  const connectionOptions = await getConnectionOptions();
  await createConnection({
    ...connectionOptions,
    synchronize: true,
    entities: ['dist/models/*.js']
  });

  const schema = await buildSchema({
    resolvers: [User] // add resolvers in array
  });

  const resolvers = {};

  const server = new ApolloServer({ schema, resolvers });

  server.listen(8000, () => {
    console.log(`🚀 Server ready at http://localhost:8000/graphql`);
  });
};

app();
