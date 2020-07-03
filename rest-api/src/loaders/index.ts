import express from 'express';

import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async (expressApp: express.Application): Promise<void> => {
  await mongooseLoader();
  console.log('MongoDB initialized');
  await expressLoader(expressApp);
  console.log('Express initialized');
};
