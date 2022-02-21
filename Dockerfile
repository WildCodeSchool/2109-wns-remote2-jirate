FROM node:lts-alpine

WORKDIR /app

RUN apk update && apk add bash

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
RUN yarn  --pure-lockfile

RUN yarn generate

CMD [ "yarn", "dev" ]