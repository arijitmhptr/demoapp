const request = require("supertest");
const app = require('../app.js');

describe('GET /', () => {
    it('respond with hello world', (done) => {
    //navigate to root and check the the response is "hello world"
    request(app).get('/api').expect('Hello Node', done);
    });
});