import mongoose from 'mongoose';
import Role from './role';

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
    enum: [Role.user, Role.admin],
    default: Role.user,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);
