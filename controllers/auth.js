const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

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

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const loadedUser = await User.findOne({ email: email });
  if (!loadedUser || loadedUser.password !== password) {
    const error = new Error('wrong email or password');
    error.statusCode = 401;
    throw error;
  }
  const token = jwt.sign(
    {
      email: loadedUser.email,
      userId: loadedUser._id.toString(),
      role: loadedUser.role
    },
    'secret',
    { expiresIn: '1h' }
  );
  res.status(200).json({ token: token, userId: loadedUser._id });
}
