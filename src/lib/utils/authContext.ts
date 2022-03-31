import jwt from 'jsonwebtoken';
import express from 'express';

const isAuth = (req: express.Request, requireAuth = true): string | null | object => {
  const token = req.headers.authorization || '';
  const JWT_SECRET: string = process.env.JWT_SECRET || '';

  if (token) {
    const tokenValue = token.replace('Bearer ', '');
    const user = jwt.verify(tokenValue, JWT_SECRET);

    return user;
  }

  if (requireAuth) throw new Error('Login in to access resource');

  return null;
};

export default isAuth;
