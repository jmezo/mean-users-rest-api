import {Router} from 'express';
import {body} from 'express-validator';

const route = Router();

export default (app: Router): void => {
  app.use('/auth', route);

  route.post(
      '/signup',
      [
        body('email').isEmail().withMessage('email not valid'),
        body('name').notEmpty(),
        body('password').isLength({min: 5}),
      ],
      (req, res) => {
        res.status(200).end();
      }
  );
};
