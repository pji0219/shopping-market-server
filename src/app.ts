import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import cookieParser from 'cookie-parser';

import productsRouter from './router/products';
import authRouter from './router/auth';
import cartRouter from './router/carts';

const app = express();

app.use('./uploads', express.static(path.join(__dirname, './uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('tiny'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/products', productsRouter);
app.use('/auth', authRouter);
app.use('/carts', cartRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080, () => {
  console.log('app started!');
});
