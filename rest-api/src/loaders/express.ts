import express from 'express';

export default (app: express.Application): express.Application => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  return app;
}
