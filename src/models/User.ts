import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, BeforeInsert, CreateDateColumn, MoreThanOrEqual } from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from 'type-graphql';

export const getDisplayName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: string;

  @Column()
  @Field(() => String)
  firstName!: string;

  @Column()
  @Field(() => String)
  lastName!: string;
}
