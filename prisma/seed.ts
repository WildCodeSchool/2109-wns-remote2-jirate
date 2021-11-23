import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

const prisma = new PrismaClient();

dotenv.config();

const main = async () => {
  await prisma.user.upsert({
    where: { email: 'maxime@jiraté.io' },
    update: {},
    create: {
      firstname: 'maxime',
      lastname: 'jiraté',
      email: 'maxime@jiraté.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'alexandre@jiraté.io' },
    update: {},
    create: {
      firstname: 'alexandre',
      lastname: 'jiraté',
      email: 'alexandre@jiraté.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'caroline@jiraté.io' },
    update: {},
    create: {
      firstname: 'caroline',
      lastname: 'jiraté',
      email: 'caroline@jiraté.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  prisma.user.upsert({
    where: { email: 'selma@jiraté.io' },
    update: {},
    create: {
      firstname: 'selma',
      lastname: 'jiraté',
      email: 'selma@jiraté.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'didor@jiraté.io' },
    update: {},
    create: {
      firstname: 'didor',
      lastname: 'jiraté',
      email: 'didor@jiraté.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
