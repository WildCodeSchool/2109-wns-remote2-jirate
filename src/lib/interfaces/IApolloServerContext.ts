import { IPrismaContext } from '@src/lib/interfaces/IPrismaContext';
import express from 'express';
export interface IApolloServerContext {
  prismaContext: IPrismaContext;
  req: express.Request;
}
