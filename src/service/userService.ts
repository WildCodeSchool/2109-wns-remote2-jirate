import { sign } from 'jsonwebtoken';
import { hash } from 'bcryptjs';
import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';
import { ApolloError } from 'apollo-server-errors';

export const getAllUsers = async (): Promise<User[]> => {
  const users = await prismaContext.prisma.user.findMany();
  return users;
};

export const getUserById = async (id: string): Promise<User | null> => {
  return prismaContext.prisma.user.findFirst({ where: { id } });
};

export const createUser = async (firstname: string, lastname: string, email: string, password: string): Promise<User | any> => {
  // const user = await prismaContext.prisma.user.findMany({ where: { email: email } });

  // if (user) {
  //   throw new ApolloError('Email is already taken', '400');
  // } else {
  //   const newUser = await prismaContext.prisma.user.create({
  //     data: {
  //       firstname,
  //       lastname,
  //       email,
  //       password,
  //     },
  //   });

  //   bcrypt.genSalt(10, (err, salt) => {
  //     bcrypt.hash(newUser.password, salt, (err, hash) => {
  //       if (err) throw new ApolloError('Error generate hash password', '400');
  //       const res = prismaContext.prisma.user.update({
  //         where: {
  //           email: newUser.email,
  //         },
  //         data: {
  //           password: hash,
  //         },
  //       });
  //     });
  //   });
  // }

  const hashedPassword = await hash(password, 10);
  const user = await prismaContext.prisma.user.create({
    data: {
      firstname,
      lastname,
      email,
      password: hashedPassword,
    },
  });

  return user;
  // token: sign({ userId: user.id }, '121FfpfGJJU8Cff4GGSfVRT45CQZ3379D3D'),
};

export const SignIn = async (email: string, password: string): Promise<String | any> => {
  const user: Promise<User[]> = prismaContext.prisma.user.findMany({ where: { email: email } });

  console.log(user);
  // if no user is found, throw an authentication error
  if (!user) {
    throw new ApolloError('User not found', '400');
  } else {
    // if the passwords don't match, throw an authentication error

    console.log(password, user[0].password);
    const valid = await bcrypt.compare(password, user[0].password);

    console.log(valid);

    if (!valid) {
      throw new ApolloError('Password does not match.', '400');
    } else {
      // create and return the json web token
      return {
        token: sign({ userId: user[0].id }, '121FfpfGJJU8Cff4GGSfVRT45CQZ3379D3D'),
      };
    }
  }
};
