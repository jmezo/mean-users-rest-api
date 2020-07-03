import { UserInput } from "../interfaces/user";
import User from '../models/user';

export async function save(userInput: UserInput): Promise<UserInput> {
  const user = new User({...userInput});
  return await user.save();
};

export async function findAll(): Promise<UserInput[]> {
  return await User.find();
}
