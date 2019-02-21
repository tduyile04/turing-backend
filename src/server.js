/* eslint-disable no-console */
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Register middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = http.createServer(app);

// Listen on the server
const { PORT = 3001 } = process.env;

server.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

process.on('uncaughtException', err => {
  console.log(`Catch-all-net for all uncaught errors -> ${err}`);
  process.exit(1);
});
