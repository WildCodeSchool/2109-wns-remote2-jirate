import { ApolloServer, gql } from 'apollo-server';
import { CreateUserInput } from '@src/graphql/generated/graphql';
import prismaContext from '@src/lib/prisma/prismaContext';
import schema from '@src/graphql/schema/schema';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';

const DELETE_USER_MUTATION = gql`
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      name
      userId
    }
  }
`;

describe('Delete a new project', () => {
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

   beforeEach(async () => {
    const mockUser: CreateUserInput = {
      firstname: 'Harry',
      lastname: 'Potter',
      email: 'harrypotter@example.com',
      password: 'poudlard',
    };

    await prismaContext.prisma.user.create({
      data: mockUser,
    });
  });

  afterAll(async () => {
    await prismaContext.prisma.project.deleteMany();
    await prismaContext.prisma.user.deleteMany();
    await prismaContext.prisma.$disconnect();
  });

  it('should delete new project', async () => {
    const user = await prismaContext.prisma.user.findMany();

    const mockProject = {
      name: 'John',
      token: 'akfjp334ddpfejggr44D3FGG5',
      userId: user[0].id,
    };

    const res = await server.executeOperation({
      query: DELETE_USER_MUTATION,
      variables: { input: mockProject },
    });

    expect(res.data).toBeDefined();
    expect(res?.data?.deleteProject).toBeDefined();
    const deleteProjectData = res?.data?.deleteProject;
    expect(deleteProjectData.name).toBe(mockProject.name);

    const userData = await prismaContext.prisma.user.findMany({ where: { id: deleteProjectData.userId } });

    expect(userData.length).toBe(1);
    expect(userData[0].firstname).toBe('Harry');
    expect(userData[0].lastname).toBe('Potter');
  });
});
