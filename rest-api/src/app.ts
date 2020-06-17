import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth';
import usersRoutes from './routes/users';

import authGuard from './middleware/auth-guard';
import errorHandler from './middleware/error-handler';

const app = express();
app.use(bodyParser.json());

app.use((_req, _res, next) => {
  console.log('connected');
  next();
});

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/auth', authRoutes);
app.use('/users', authGuard, usersRoutes);

app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/mean-users', {useNewUrlParser: true, useUnifiedTopology: true})
.then((_) => {
  app.listen(8080);
})
.catch((error) => {
  console.log(error);
});
