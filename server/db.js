import pkg from 'pg';
const { Pool } = pkg;

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({ connectionString: connectionString });

console.log('attempting to connect');
pool
  .connect()
  .then((client) => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to database', err);
  });

const createTablesQuery = `
  CREATE TABLE IF NOT EXISTS users (
    userID SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS articles (
    articleID SERIAL PRIMARY KEY,
    url VARCHAR (255) NOT NULL
    author VARCHAR(255) NOT NULL,
    publishDate VARCHAR(255) NOT NULL,
    keyword VARCHAR(255) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS savedList (
    id SERIAL PRIMARY KEY,
    userID VARCHAR(255) UNIQUE NOT NULL,
    articleID VARCHAR(255) UNIQUE NOT NULL,
    keyword VARCHAR(255) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS historyList (
    id SERIAL PRIMARY KEY,
    userID VARCHAR(255) UNIQUE NOT NULL,
    articleID VARCHAR(255) UNIQUE NOT NULL,
    dateViewed TIMESTAMP NOT NULL
  );
`;

pool
  .query(createTablesQuery)
  .then(() => {
    console.log('Tables created successfully');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });

export default pool;
