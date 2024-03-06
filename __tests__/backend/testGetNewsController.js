const { it } = require('node:test');
const request = require('supertest');
const server = 'http://localhost:3000';

// testing the root endpoint
describe('Route integration', () => {
  describe('GET', () => {
    describe('/', () => {
      test('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
    describe('/getNews', () => {
      test('reponds with 200 status and receives application/json content type', () => {
        return request(server)
          .get('/getNews')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
  describe('POST', () => {
    describe('/getNews with req.body.value', () => {
      test('reponds with 200 status and receives application/json content type', () => {
        return request(server)
          .post('/getNews')
          .send([{ value: 'Javascript' }])
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
  describe('404 error handler', () => {
    test('Should trigger 404 handler if invalid endpoint', async () => {
      return request(server).get('/notAnEndPoint').expect(404);
    });
  });
  describe('/getNews triggers the global error handler', () => {
    test('reponds with 500 status', () => {
      return request(server).get('/error', (req, res) => {
        throw new Error('Test error').expect(500);
      });
    });
  });
});

