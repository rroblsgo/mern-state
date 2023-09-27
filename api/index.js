import express from 'express';
import morgan from 'morgan';
import { connectDB } from './db.js';
import userRouter from './routes/user.route.js';

connectDB();

const app = express();

app.use(morgan('dev'));

app.use('/api/user', userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
