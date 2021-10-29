
import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateUser {
  // @MaxLength(25)
  firstName!: string;

  @Field()
  // @MaxLength(25)
  lastName!: string;
}
