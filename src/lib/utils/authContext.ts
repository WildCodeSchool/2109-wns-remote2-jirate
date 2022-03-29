import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';

const getUser = async (token: string): Promise<User | null> => {
  if (!token) {
    return null;
  }

  const userToken = jwt.verify(token, '121FfpfGJJU8Cff4GGSfVRT45CQZ3379D3D') as User;
  return await prismaContext.prisma.user.findUnique({ where: { id: userToken.id } });
};

const authContext = async req => {
  const header = req.req.headers.authorization;

  const token = header.replace('Bearer ', '');

  return { user: await getUser(token) };
};

export default authContext;
