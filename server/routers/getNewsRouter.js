import getNewsController from '../controllers/getNewsController.js';
import express from 'express';
const router = express.Router();

// router('/', getNewsController.getNews, (req, res) => {
//   console.log('---> ENTERING GET NEWS ROUTER <---');
//   return res.status(200).json(res.locals.getNews);
// });

export default router;
