import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';

const app = express();

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

// app.use('/', (req: Request, res: Response) => {
//   res.status(200).json({ message: 'hello, world!!' });
// });

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
