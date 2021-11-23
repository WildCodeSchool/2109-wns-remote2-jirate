import { PrismaClient } from '@prisma/client';
import { IPrismaContext } from '@src/lib/interfaces/IPrismaContext';

const prismaContext: IPrismaContext = {
  prisma: new PrismaClient(),
};

export default prismaContext;
