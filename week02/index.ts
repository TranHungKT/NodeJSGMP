import express, {Request, Response, NextFunction} from 'express';
import joi from 'joi';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const UserSchema = joi.object({
  id: joi.string().required(),
  login: joi.string().required(),
  password: joi
    .string()
    .regex(/^[a-zA-Z0-9]{0,}$/)
    .required(),
  age: joi.number().integer().min(4).max(130).required(),
  isDeleted: joi.boolean().required(),
});

const UserDeleteSchema = joi.object({
  id: joi.string().required(),
});

type User = {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
};

const userData: User[] = [
  {
    id: '1',
    login: 'hung@gmail.com',
    password: '12345678',
    age: 22,
    isDeleted: false,
  },
  {
    id: '2',
    login: 'hung2@gmail.com',
    password: '12345678',
    age: 22,
    isDeleted: false,
  },
  {
    id: '3',
    login: 'hung3@gmail.com',
    password: '12345678',
    age: 22,
    isDeleted: false,
  },
];

const checkUserId = (id: string) => {
  return userData.findIndex((user: User) => user.id === id);
};

app.get('/', (req, res) => {
  res.send({userData});
});

app.get('/users/:id', (req, res, next) => {
  const {id} = req.params;

  const userIndex = checkUserId(id);

  if (userIndex === -1) {
    return next('Can not find user');
  }

  return res.json({data: userData[userIndex]});
});

app.post('/users', async (req: Request<{}, {}, User>, res, next) => {
  try {
    await UserSchema.validateAsync(req.body);
  } catch (error: any) {
    return next(error.message);
  }

  const userIndex = checkUserId(req.body.id);

  if (userIndex !== -1) {
    return next('Invalid id');
  }

  userData.push(req.body);

  return res.send('Success');
});

app.put('/users', async (req: Request<{}, {}, User>, res, next) => {
  try {
    await UserSchema.validateAsync(req.body);
  } catch (error: any) {
    return next(error.message);
  }

  const userIndex = checkUserId(req.body.id);

  if (userIndex === -1) {
    return next('Invalid id');
  }

  userData[userIndex] = req.body;

  return res.send('Success');
});

app.delete('/users', async (req: Request<{}, {}, {id: string}>, res, next) => {
  try {
    await UserDeleteSchema.validateAsync(req.body);
  } catch (error: any) {
    return next(error.message);
  }

  const userIndex = checkUserId(req.body.id);

  if (userIndex === -1) {
    return next('Invalid id');
  }

  userData[userIndex].isDeleted = true;
  console.log(userData);
  return res.send('Success');
});

app.get(
  '/users',
  (
    req: Request<{}, {}, {}, {loginSubstring: string; limit: string}>,
    res,
    next,
  ) => {
    const {loginSubstring, limit} = req.query;
    const userList: User[] = [];
    let count = 0;
    userData.filter(user => {
      if (count < parseInt(limit) && user.login.includes(loginSubstring)) {
        userList.push(user);
        count++;
      }
    });

    res.send(userList);
  },
);

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
