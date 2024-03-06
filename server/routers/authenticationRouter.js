import authenticationController from '../controllers/authenticationController.js';
import express from 'express';
const router = express.Router();

router.use('/login', authenticationController.login, (req, res) => {
  console.log('---> ENTERING AUTH LOGIN ROUTER <---');
  return res.status(200).json(res.locals.login); 
});

router.use('/newUser', authenticationController.createNewUser, (req, res) => {
  console.log('---> ENTERING AUTH LOGIN ROUTER <---');
  return res.status(200).json(res.locals.createUser);
});

export default router;
