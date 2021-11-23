import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { User } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllUsers } from '@src/service/userService';
import UserType from '@src/graphql/schema/typedefs/User/UserType';

export const getAllUsersQueryResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
  _source,
  _args,
  _context,
  _info
): Promise<User[]> => {
  const users = await getAllUsers();
  return users;
};

const getAllUsersQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all users query',
  type: GraphQLList(UserType),
  resolve: getAllUsersQueryResolver,
};

export default getAllUsersQuery;
