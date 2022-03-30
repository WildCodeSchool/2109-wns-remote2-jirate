import jwt from 'jsonwebtoken';
import express from 'express';


const getUser = (req: express.Request): string | null | object => {
  const token = req.headers.authorization || '';
  const JWT_SECRET: string = process.env.JWT_SECRET || '';

  if (token) {
    const tokenValue = token.replace('Bearer ', '');
    const user = jwt.verify(tokenValue, JWT_SECRET);

    return user;
  }

  return null;
};

export default getUser;
