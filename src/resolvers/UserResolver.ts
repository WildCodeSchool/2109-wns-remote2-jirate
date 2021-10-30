import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { User } from '../models/User';

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  users() {
    // :User[]
    const result = User.find();
    console.log(result);
    return User.find();
  }

  // @Mutation(() => User)
  // async addWilder(@Arg('userInput') userInput: UserInput) {
  //   const repository = connection.getRepository(User);
  //   return await User.create(wilderInput);
  // }
}
