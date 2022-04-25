import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import * as faker from 'faker';

const prisma = new PrismaClient();

dotenv.config();

const main = async () => {
  await prisma.user.upsert({
    where: { email: 'maxime@jirate.io' },
    update: {},
    create: {
      firstname: 'maxime',
      lastname: 'jiraté',
      email: 'maxime@jirate.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'alexandre@jirate.io' },
    update: {},
    create: {
      firstname: 'alexandre',
      lastname: 'jiraté',
      email: 'alexandre@jirate.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'caroline@jirate.io' },
    update: {},
    create: {
      firstname: 'caroline',
      lastname: 'jiraté',
      email: 'caroline@jirate.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'selma@jirate.io' },
    update: {},
    create: {
      firstname: 'selma',
      lastname: 'jiraté',
      email: 'selma@jirate.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'didor@jirate.io' },
    update: {},
    create: {
      firstname: 'didor',
      lastname: 'jiraté',
      email: 'didor@jirate.io',
      password: 'jiratéb123*',
      isAdmin: true,
      emailConfirmed: true,
    },
  });

  const users = await prisma.user.findMany();

  for (let i = 0; i < 5; i++) {
    await prisma.project.createMany({
      data: {
        name: faker.company.companyName(),
        token: faker.random.word(),
        userId: users[i].id,
        limitCollaborators: faker.datatype.number({
          min: 1,
          max: 10,
        }),
        description: faker.lorem.paragraph(),
      },
    });
  }
};

if (process.env.NODE_ENV === 'development') {
  main()
    .catch(e => {
      /* eslint no-console: ["error", { allow: ["error"] }] */
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
