const { validationResult } = require('express-validator');

const User = require('../models/user');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const user = new User({
    email:email,
    name: name,
    password: password,
    role: 'user'
  });
  user.save()
  .then((result) => {
    res.status(201).json({message: 'User created.', userId: result._id});
  })
  .catch((err) => {
    next(err);
  });
}
