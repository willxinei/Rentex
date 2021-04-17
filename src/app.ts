import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import AppError from 'errors/AppError';
import Router from './routes';

const app = express();

app.use(express.json());
app.use(Router);

app.use(errors());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'erro interno',
  });
});

export default app;
