import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import UserResolver from '../resolvers/UserResolver';
import etablishConnection from '../config/dbConnection';

dotenv.config();

class App {
  constructor() {
    this.start();
  }

  public async start() {
    const schema = await buildSchema({
      resolvers: [UserResolver],
      emitSchemaFile: true,
      validate: false,
    });
    await etablishConnection();
    const server = new ApolloServer({ schema });
    this.listen(server);
  }

  private async listen(server: ApolloServer) {
    const port = process.env.PORT || '8001';
    const { url } = await server.listen(port);
    console.log(`🚀 App listening on the port ${port} at url ${url}/graphql`);
  }
}

export default App;
