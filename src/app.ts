import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { usersRouter } from './routers/users.router.js';
import { livingSpaceRouter } from './routers/livingSpace.router.js';

import createDebug from 'debug';
import { CustomError } from './errors/errors.js';
const debug = createDebug('REFORMAS:app');
export const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*',
};
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/livingspace', livingSpaceRouter);

app.get('/', (_req, resp) => {
  resp.json({
    info: 'Reformas',
    endpoints: {
      users: '/users',
      livingSpace: '/livingspace',
    },
  });
});

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: CustomError, _req: Request, resp: Response, _next: NextFunction) => {
    debug('Soy el middleware de errores');
    const status = error.statusCode || 500;
    const statusMessage = error.statusMessage || 'Internal server error';
    resp.status(status);
    resp.json({
      error: [
        {
          status,
          statusMessage,
        },
      ],
    });
    debug(status, statusMessage, error.message);
  }
);
