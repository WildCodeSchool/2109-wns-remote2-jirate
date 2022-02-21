import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';

export const getAllUsers = async (): Promise<User[]> => {
  const users = await prismaContext.prisma.user.findMany();
  return users;
};

export const getUserById = async (id: string): Promise<User | null> => {
  return prismaContext.prisma.user.findFirst({ where: { id } });
};

export const createUser = async (firstname: string, lastname: string, email: string, password: string): Promise<User | any> => {
  const hashedPassword = await hash(password, 10);
  const user = await prismaContext.prisma.user.create({
    data: {
      firstname,
      lastname,
      email,
      password: hashedPassword,
    },
  });
  return { token: sign({ userId: user.id }, '121FfpfGJJU8Cff4GGSfVRT45CQZ3379D3D'), user };
};
