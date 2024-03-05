import authenticationController from '../controllers/authenticationController.js';
import express from 'express';
const router = express.Router();

router.use('/', authenticationController.login, (req, res) => {
  console.log('---> ENTERING AUTH LOGIN ROUTER <---');
  return res.status(200).json(res.locals.auth); //What will res.locals.auth be?
});

router.use('/newUser', authenticationController.createNewUser, (req, res) => {
  console.log('---> ENTERING AUTH LOGIN ROUTER <---');
  return res.status(200);
});

export default router;
