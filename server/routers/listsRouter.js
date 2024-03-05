import favoriteController from '../controllers/favoriteController.js';
import historyController from '../controllers/historyController.js';
import express from 'express';
const router = express.Router();

// router('/addFavorite', favoriteController.add, (req, res) => {
//   console.log('---> ENTERING ADD FAVORITE ROUTER <---')
//   return res.status(200).json(res.locals.addFavorite);
// })

// router('/deleteFavorite', favoriteController.delete, (req, res) => {
//   console.log('---> ENTERING DELETE FAVORITE ROUTER <---')
//   return res.status(200).json(res.locals.deleteFavorite);
// })

// router('/grabFavorites', favoriteController.grab, (req, res) => {
//   console.log('---> ENTERING GRAB FAVORITES ROUTER <---')
//   return res.status(200).json(res.locals.grabFavorites);
// })

// router('/addHistory', historyController.add, (req, res) => {
//   console.log('---> ENTERING ADD HISTORY ROUTER <---')
//   return res.status(200).json(res.locals.addHistory);
// })

export default router;
