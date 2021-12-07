import express, {Request, Response, NextFunction} from 'express';
import routes from './routes';
import './configs/initDB';
import Logger from './logger';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(routes);

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  Logger.error(err);
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
