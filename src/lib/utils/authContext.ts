import jwt from 'jsonwebtoken';
import express from 'express';
import { User } from '@prisma/client';

const getUser = (req: express.Request): any => {
  const token = req.headers.authorization || '';

  if (token) {
    const tokenValue = token.replace('Bearer ', '');
    const user = jwt.verify(tokenValue, '121FfpfGJJU8Cff4GGSfVRT45CQZ3379D3D') as User;
    return user;
  }
  //return await prismaContext.prisma.user.findUnique({ where: { id: userToken.id } });
};

export default getUser;
