FROM node:lts-alpine as dev
# FROM node:16-slim

WORKDIR /app

RUN apk update && apk add bash
# RUN apt-get update
# RUN apt-get install -y openssl

COPY package.json ./
COPY yarn.lock  ./

COPY .env ./.env
COPY .env.sample ./.env.sample
COPY .env.test ./.env.test

# copy source files
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY jest.config.js ./jest.config.js
COPY bin ./bin
COPY nodemon.json ./nodemon.json
COPY jest.config.js ./jest.config.js

COPY prisma ./prisma
COPY codegen.yml ./codegen.yml
RUN yarn

RUN yarn generate

# seed the database

RUN yarn db:seed

