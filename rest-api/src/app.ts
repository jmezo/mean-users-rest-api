import express, { Router } from 'express';
import mongoose from 'mongoose';

import config from './config';

async function startServer() {
  const app = express();

  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  try {
    await mongoose.connect(config.databaseUri, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('connected to database');
  } catch (e) {
    console.log(e);
  }

  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`app listening on port ${config.port}`)
    }
  });
}

startServer();
