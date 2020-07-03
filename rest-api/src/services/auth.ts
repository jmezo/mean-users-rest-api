import { Model } from "mongoose";
import bcrypt from 'bcryptjs';

import { UserInput, UserResponse } from "../interfaces/user";
import * as UserDao from '../dao/user';

export default class AuthService {

  constructor() {}

  public async signup(userInput: UserInput): Promise<UserResponse> {
    const salt = bcrypt.genSaltSync();
    userInput.password = bcrypt.hashSync(userInput.password, salt);
    const createdUser = await UserDao.save(userInput);
    return {...createdUser};
  };
}
