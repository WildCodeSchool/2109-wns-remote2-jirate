import { ApolloServer, gql } from 'apollo-server';
import { CreateUserInput } from '@src/graphql/generated/graphql';
import prismaContext from '@src/lib/prisma/prismaContext';
import schema from '@src/graphql/schema/schema';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';

const CREATE_USER_MUTATION = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      name
      userId
      token
      description
      limitCollaborators
    }
  }
`;

describe('Create a new project', () => {
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

  it('should create new project', async () => {
    const user = await prismaContext.prisma.user.findMany();

    const mockProject = {
      name: 'John',
      token: 'akfjp334ddpfejggr44D3FGG5',
      userId: user[0].id,
      description: 'test',
      limitCollaborators: 4
    };

    const res = await server.executeOperation({
      query: CREATE_USER_MUTATION,
      variables: { input: mockProject },
    });

    expect(res.data).toBeDefined();
    expect(res?.data?.createProject).toBeDefined();
    const createProjectData = res?.data?.createProject;
    expect(createProjectData.name).toBe(mockProject.name);
    expect(createProjectData.token).toBe(mockProject.token);
    expect(createProjectData.token).toBe(mockProject.token);
    expect(createProjectData.description.length).toBeGreaterThanOrEqual(mockProject.description.length); // TODO: should verify
    expect(createProjectData.limitCollaborators).toBe(mockProject.limitCollaborators);

    const userData = await prismaContext.prisma.user.findMany({ where: { id: createProjectData.userId } });

    expect(userData.length).toBe(1);
    expect(userData[0].firstname).toBe('Harry');
    expect(userData[0].lastname).toBe('Potter');
  });
});
