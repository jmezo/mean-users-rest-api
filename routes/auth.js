const express = require('express');
const { body } = require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');

const router = express.Router();

router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('email not valid')
    .custom((value) => {
      return User.findOne({email: value}).then((userDoc) => {
        if (userDoc) {
          return Promise.reject('email in use');
        }
      })
    }).normalizeEmail(),
    body('name').notEmpty(),
    body('password').isLength({ min: 5})
  ],
  authController.signup
);

router.post(
  '/login',
  authController.login
);

module.exports = router;