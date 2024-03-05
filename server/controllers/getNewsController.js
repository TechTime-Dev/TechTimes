const getNewsController = {};

getNewsController.getNews = async (req, res, next) => {
  console.log('---> ENTERING GET NEWS CONTROLLER <---');
  let url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-03-04&' +
          'sortBy=popularity&' +
          'apiKey=210a676b710347d48864b72c5f78bd3c';

let req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
  res.locals.getNews = console.log('Getting News!');
  return next();
};

export default getNewsController;
