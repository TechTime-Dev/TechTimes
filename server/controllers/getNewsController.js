const getNewsController = {};

const date = new Date();
const today = date.toLocaleDateString();

getNewsController.getNews = async (req, res, next) => {
  req.body.value = "JavaScript";
  console.log("---> ENTERING GET NEWS CONTROLLER <---");
  let url;
  if (req.body.option === "Topic") {
    url =
      "https://newsapi.org/v2/everything?" +
      `q=${req.body.value}&` +
      `from=${today}` +
      "sortBy=popularity&" +
      "apiKey=210a676b710347d48864b72c5f78bd3c";
  } else if (req.body.option === "Source") {
    url = `https://newsapi.org/v2/top-headlines/sources?country=usapiKey=API_KEY210a676b710347d48864b72c5f78bd3c`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log('source', data.articles[0].source.name);
    console.log("source articles", data.articles);
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
