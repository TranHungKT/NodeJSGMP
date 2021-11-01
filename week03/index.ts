import express, {Request, Response, NextFunction} from 'express';
import routes from './routes';
import './configs/initDB';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(401).send({
    error: [
      {
        message: err,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
