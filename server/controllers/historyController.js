const historyController = {};

// grabs whatever is in the history object/array
    // put a length limit on it? ~30
    // put a TIME TO KILL on it of a few days? ~7
    // maybe have clear all button
historyController.grab = async (req, res, next) => {
    try{
        console.log(" ---> GRABBING ARTICLES HISTORY <---")
        res.locals.history = req.body
    } catch (err) {
        next(err);
    }
};

// adds an article to the history base on a click event
historyController.add = async (req, res, next) => {
  console.log('---> ENTERING HISTORY ADD CONTROLLER <---');
  try{
    res.locals.addHistory = console.log('added history');
    return next();
  } catch(err) {
    console.log(err);
  }
}

export default historyController;
