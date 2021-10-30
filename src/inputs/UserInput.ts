import { InputType, Field } from 'type-graphql';
import { User } from '../models/User';

@InputType()
export default class UserInput implements Partial<User> {
  @Field()
  firstname!: string;

  @Field()
  lastName!: string;
}
