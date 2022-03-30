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
  const user = await prismaContext.prisma.user.findMany({ where: { email: email } });

  if (user.length !== 0) {
    throw new ApolloError('Email is already taken', '400');
  } else {
    const hashedPassword = await hash(password, 10);

    const newUser = await prismaContext.prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
      },
    });

    return newUser;
  }
};

export const SignIn = async (email: string, password: string): Promise<String | any> => {
  const user = await prismaContext.prisma.user.findUnique({ where: { email: email } });

  // if no user is found, throw an authentication error
  if (!user) {
    throw new ApolloError('User not found', '400');
  } else {
    // if the passwords don't match, throw an authentication error

    const valid = bcrypt.compare(password, user.password);

    if (!valid) {
      throw new ApolloError('Password does not match.', '400');
    } else {
      // create and return the json web tokenx
      const JWT_SECRET: string = process.env.JWT_SECRET || '';
      
      return {
        token: sign({ id: user.id }, JWT_SECRET, { expiresIn: '5d' }),
      };
    }
  }
};
