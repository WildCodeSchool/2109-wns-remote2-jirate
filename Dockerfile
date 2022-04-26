FROM node:lts-alpine as dev
# FROM node:16-slim

RUN mkdir /app
WORKDIR /app

RUN apk update && apk add bash

COPY package.json ./
COPY yarn.lock  ./

COPY .env ./.env
COPY .env.sample ./.env.sample

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

# RUN yarn db:seed

# see for the if and then

