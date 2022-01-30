FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY public public
COPY src src

CMD yarn start