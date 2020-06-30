import dotenv from 'dotenv';

const result = dotenv.config();
console.log(result);
if (result.error) {
  throw new Error("couldn't find .env file");
}

export default {
  port: parseInt(process.env.PORT),
  databaseUri: process.env.MONGODB_URI,
}
