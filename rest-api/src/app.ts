import express, { Router } from 'express';

async function startServer() {
  const app = express();

  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.listen(8080, (err) => console.log(err));
}

startServer();
