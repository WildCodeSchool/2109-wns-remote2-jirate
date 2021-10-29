import { createConnection } from 'typeorm';

const etablishConnection = async () => {
  const connection = await createConnection();
  if (connection) {
    console.log('DB connected');
  } else {
    console.log('error for connect to DB');
  }
};

export default etablishConnection;
