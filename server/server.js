import path from 'path';
import express from 'express';
require('dotenv').config();
import cors from 'cors';
const app = express();
import pkg from 'pg';
const { Pool } = pkg;
import authenticationRouter from './routers/authenticationRouter.js';
import getNewsRouter from './routers/getNewsRouter.js';
import listsRouter from './routers/listsRouter.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({ connectionString: connectionString });

console.log('attempting to connect')
pool
  .connect()
  .then((client) => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to database', err);
  });

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/lists', listsRouter);
app.use('/getNews', getNewsRouter);
app.use('/authentication', authenticationRouter);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('*', (req, res) => res.status(404).send('Page not found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middlware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () =>
  console.log(`Server online, listening on port: ${PORT}`)
);
