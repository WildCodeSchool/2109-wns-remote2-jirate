import { ApolloServer, gql } from 'apollo-server';
import { CreateUserInput } from '@src/graphql/generated/graphql';
import prismaContext from '@src/lib/prisma/prismaContext';
import schema from '@src/graphql/schema/schema';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      firstname
      lastname
      email
    }
  }
`;

describe('Create a new user', () => {
  let server: ApolloServer;

  beforeAll(() => {
    const apolloServerContext: IApolloServerContext = {
      prismaContext,
    };

    const apolloServerConfig = {
      schema,
      playground: process.env.NODE_ENV !== 'production',
      context: apolloServerContext,
    };

    server = new ApolloServer(apolloServerConfig);
  });

  afterAll(async () => {
    await prismaContext.prisma.user.deleteMany();
    await prismaContext.prisma.$disconnect();
  });

  it('should create new user', async () => {

    const mockUser: CreateUserInput = {
      firstname: 'John',
      lastname: 'Doe',
      email: 'johndoe@example.com',
      password: 'yes56',
    };

    const res = await server.executeOperation({
      query: CREATE_USER_MUTATION,
      variables: { input: mockUser },
    });


    expect(res.data).toBeDefined();
    expect(res?.data?.createUser).toBeDefined();
    const createUser = res?.data?.createUser;
    expect(createUser.firstname).toBe(mockUser.firstname);
    expect(createUser.lastname).toBe(mockUser.lastname);
    expect(createUser.email).toBe(mockUser.email);
  });
});
