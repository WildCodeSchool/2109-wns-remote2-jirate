import { createConnection, ConnectionOptions } from 'typeorm';

const etablishConnection = async () => {
  let config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    cli: {
      migrationsDir: 'src/migrations',
    },
    migrations: ['dist/migrations/*.js'],
    entities: ['dist/models/*.js'],
    synchronize: true,
    logging: true,
  };

  if (process.env.NODE_ENV === 'test') {
    config = {
      type: 'mysql',
      host: process.env.DB_HOST_TEST,
      port: Number(process.env.DB_PORT_TEST),
      username: process.env.DB_USER_TEST,
      password: process.env.DB_PASS_TEST,
      database: process.env.DB_NAME_TEST,
      cli: {
        migrationsDir: 'src/migrations',
      },
      migrations: ['dist/migrations/*.js'],
      entities: ['dist/models/*.js'],
      synchronize: true,
      logging: true,
    };
  }

  const connection = await createConnection(config);
  if (connection) {
    console.log('DB connected');
  } else {
    console.log('error for connect to DB');
  }
};

export default etablishConnection;
