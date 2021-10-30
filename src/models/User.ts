import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field(() => String)
  firstname!: string;

  @Column()
  @Field(() => String)
  lastname!: string;
}
