import mongoose from 'mongoose';

import { UserInput } from '../interfaces/user';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
  }
});

export default mongoose.model<UserInput & mongoose.Document>('User', userSchema);
