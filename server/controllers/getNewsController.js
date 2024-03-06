const getNewsController = {};

const date = new Date();
const today = date.toLocaleDateString();

getNewsController.getNews = async (req, res, next) => {
  console.log("---> ENTERING GET NEWS CONTROLLER <---");

  let url;
  if (req.body.value) {
    url =
      "https://newsapi.org/v2/everything?" +
      "language=en&" +
      `q=${req.body.value}&` +
      `from=${today}` +
      "sortBy=popularity&" +
      "apiKey=210a676b710347d48864b72c5f78bd3c";
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=210a676b710347d48864b72c5f78bd3c`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.locals.getNews = data;
    return next();
  } catch (error) {
    return next({
      log: "Express error handler caught a middlware error in get news",
      status: 500,
      message: { err: "An error occured" },
    });
  }
};

export default getNewsController;
