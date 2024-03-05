import authenticationController from '../controllers/authenticationController';
import express from 'express';
const authenticationRouter = express.Router();

router('/', authenticationController.login, (req, res) => {
  console.log('---> ENTERING AUTH LOGIN ROUTER <---');
  return res.status(200);
});

export default router;
