import { ApolloServer, gql } from 'apollo-server';
import apolloServerConfig from '@src/lib/config/apolloServerConfig';
import { CreateUserInput } from '@src/graphql/generated/graphql';
import prismaContext from '@src/lib/prisma/prismaContext';

const CREATE_USER_MUTATION = gql`
  mutation Mutation($input: CreateUserInput) {
    createUser(input: $input) {
      __typename
      firstname
      password
    }
  }
`;

describe('tests', () => {
  let server: ApolloServer;
  const typename = 'User';

  beforeAll(() => {
    server = new ApolloServer(apolloServerConfig);
  });

  afterAll(async () => {
    prismaContext.prisma.user.deleteMany();
    await prismaContext.prisma.$disconnect();
  });

  it('should create a new User', async () => {
    const mockUser: CreateUserInput = {
      firstname: 'John',
      lastname: 'doe',
      email: 'johndoe@testing.io',
      password: 'jiratéTesting',
    };

    const result = await server.executeOperation({
      query: CREATE_USER_MUTATION,
      variables: { input: mockUser },
    });

    console.log(result);

    expect(result.data).toBeDefined();
    expect(result?.data?.createUser).toBeDefined();
    const createdUser = result?.data?.createUser;

    console.log(result?.data);

    expect(createdUser.__typename).toBe(typename);
    expect(createdUser.firstname).toBe(mockUser.firstname);
    expect(createdUser.lastname).toBe(mockUser.lastname);
  });
});
