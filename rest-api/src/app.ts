import express from 'express';

import config from './config';
import init from './loaders';

async function startServer() {
  const app = express();

  await init(app);

  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`app listening on port ${config.port}`);
    }
  });
}

startServer();
