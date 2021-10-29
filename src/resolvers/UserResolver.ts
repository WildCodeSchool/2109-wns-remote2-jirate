import { Resolver, Query } from 'type-graphql';

import User from '../models/User';

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  users(): User[] {
    return [];
  }
}
