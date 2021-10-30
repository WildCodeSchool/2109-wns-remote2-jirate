import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../models/User';
import UserInput from '../inputs/UserInput';

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  users() {
    const result = User.find();
    return result;
  }

  @Mutation(() => User)
  async createUser(@Arg('userInput') userInput: UserInput) {
    const user = User.create(userInput);
    await user.save();
    return user;
  }
}
