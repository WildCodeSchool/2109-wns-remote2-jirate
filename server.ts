import express, {Express} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();


const corsOptions = {
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.get('/', (_, res) => {
  res.status(200).send('Hello word');
});

// running server

let PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));