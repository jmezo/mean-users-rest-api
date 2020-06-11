const express = require('express');
const { body } = require('express-validator');

const usersController = require('../controllers/users');
const User = require('../models/user');

const router = express.Router();

router.get('/users', usersController.getUsers);
router.put(
  '/user',
  [
    body()
      .custom((body, { req }) => body.role === 'admin' || req.userId == body.userId)
      .withMessage('not authorized'),
    body('userId')
      .custom((value) => {
        return User.findById(value)
        .then((user) => {
          if (user) {
            Promise.reject('not a valid user id');
          }
        });
      }),
    body('email')
      .if(body('email').exists())
      .isEmail().withMessage('not a valid email')
      .custom((value) => {
        return User.findOne({ email: value })
        .then((user) => {
          if (user) {
            return Promise.reject('email already taken');
          }
        });
      })
    ],
    usersController.updateUser
  );

  router.delete(
    '/user',
    [
      body()
      .custom((body, { req }) => body.role === 'admin' || req.userId == body.userId)
    ],
    usersController.deleteUser
  );

module.exports = router;