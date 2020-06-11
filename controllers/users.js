const { validationResult } = require('express-validator');

const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
  const users = await User.find({}, '_id email name role');
  res.status(200).json(users);
}