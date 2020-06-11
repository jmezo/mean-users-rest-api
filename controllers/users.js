const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
  const users = await User.find({}, '_id email name role');
  res.status(200).json(users);
}

exports.updateUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('validation failed');
    error.statusCode = 422;
    error.data = errors.array();
    return next(error);
  }
  const user = await User.findById(req.body.userId);
  const email = req.body.email || user.email;
  const name = req.body.name || user.name;
  const password = encryptPassword(req.body.password) || user.password;
  const role = req.body.role || user.role;
  try {
    await User.updateOne({_id: req.body.userId}, {email: email, name: name, password: password, role: role});
    res.status(200).json({message: 'user updated', userId: user._id.toString()});
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode(500);
    }
    next(err);
  }
}

exports.deleteUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('validation failed');
    error.statusCode = 422;
    error.data = errors.array();
    return next(error);
  }
  try {
    await User.findByIdAndDelete(req.body.userId);
    res.status(200).json({message: 'user deleted', userId: user._id.toString()});
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

const encryptPassword = (pw) => {
  if (!pw) return undefined;
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(pw, salt);
}
