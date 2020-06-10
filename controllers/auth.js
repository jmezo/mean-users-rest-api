const User = require('../models/user');

exports.signup = (req, res, next) => {
  console.log('in signup');
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
    res.status(201).json({message: 'User created!', userId: result._id});
  })
  .catch((err) => {
    next(err);
  });
}
