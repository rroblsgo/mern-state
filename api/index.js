import express from 'express';
import morgan from 'morgan';
import { connectDB } from './db.js';

connectDB();

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
