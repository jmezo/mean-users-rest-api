import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from '../api';
import config from '../config';

export default (app: express.Application): express.Application => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(cors());

  app.use(bodyParser.json());

  app.use(config.api.prefix, routes());

  return app;
};
