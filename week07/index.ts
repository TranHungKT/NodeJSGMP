import express, {Request, Response, NextFunction} from 'express';
import routes from './routes';
import './configs/initDB';
import Logger from './logger';
import {CustomError} from './helpers';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  Logger.error(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({error: err.serializeErrors()});
  }

  return res.status(500).send({
    error: [
      {
        method: req.method,
        body: req.body,
        params: req.params,
        message: err,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
