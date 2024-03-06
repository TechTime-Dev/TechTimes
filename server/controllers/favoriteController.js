const favoriteController = {};
import pool from '../db.js';

favoriteController.add = (req, res, next) => {
  console.log('---> ENTERING ADD FAVORITE CONTROLLER <---');
  pool
    .query('INSERT INTO savedList (userID, articleID) VALUES ($1, $2)', [
      'john_doe',
      'someArticleID',
    ])
    .then((result) => {
      res.locals.addFavorite = result;
      console.log('Row inserted successfully');
      return next();
    })
    .catch((error) => {
      return next({
        log: 'Express error handler caught an middleware error in add favorite',
        status: 500,
        message: { err: 'An error occurred' },
      });
    });
};

favoriteController.delete = async (req, res, next) => {
  console.log('---> ENTERING DELETE FAVORITE CONTROLLER <---');
  pool
    .query('DELETE FROM savedList (userID, articleID) VALUES ($1, $2)', [
      'john_doe',
      'someArticleID',
    ])
    .then((result) => {
      res.locals.addFavorite = result;
      console.log('Row deleted successfully');
      return next();
    })
    .catch((error) => {
      return next({
        log: 'Express error handler caught a middlware error in delete favorite',
        status: 500,
        message: { err: 'An error occured' },
      });
    });
};

favoriteController.grab = async (req, res, next) => {
  console.log('---> ENTERING GRAB FAVORITES CONTROLLER <---');
  pool
    .query('SELECT * FROM savedList (userID) VALUES ($1)', ['john_doe'])
    .then((result) => {
      res.locals.grabFavorites = result;
      console.log('Favorites Grabbed!');
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught a middleware error in grab favorites',
        status: 500,
        message: { err: 'An error occurred' },
      })
    });
};

export default favoriteController;
