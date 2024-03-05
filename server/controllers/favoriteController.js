const favoriteController = {}

favoriteController.add = async (req, res, next) => {
  console.log('---> ENTERING ADD FAVORITE CONTROLLER <---')
  res.locals.addFavorite = console.log('added favorite')
  return next();
}

favoriteController.delete = async (req, res, next) => {
  console.log('---> ENTERING DELETE FAVORITE CONTROLLER <---')
  res.locals.deleteFavorite = console.log('deleted favorite')
  return next();
}

favoriteController.grab = async (req, res, next) => {
  console.log('---> ENTERING GRAB FAVORITES CONTROLLER <---')
  res.locals.grabFavorites = console.log('Grabbing Favorites');
  return next();
}

export default favoriteController;