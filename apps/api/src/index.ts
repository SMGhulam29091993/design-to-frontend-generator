import express from 'express';
import * as color from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import { config } from '@repo/config';
import appRoutes from './routes/api/v1/index';
import db from './db/mongoose';

const app = express();

db;

const allowOrigins = [
  'http://localhost:3000',
  'http://172.16.0.165:3000',
];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow: boolean) => void
  ) => {
    if (allowOrigins.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', appRoutes);

app.listen(config.port, (err) => {
  if (err) {
    console.log(
      color.bgRed(
        'Something went wrong while starting the server'
      )
    );
    return;
  }
  console.log(
    color.bgGreen(
      `Server is up and running on port ${3030}`
    )
  );
});
