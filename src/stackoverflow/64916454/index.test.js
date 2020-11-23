const route = require('./');
const request = require('request');
const supertest = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const chai = require('chai');
let spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

//create app without credentials
let app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

describe('Testing the POST /login route', () => {
  let spy = chai.spy.on(request, 'post', (options, callback) => {
    callback();
  });

  it('should make a request to backend server when form is filled, but with wrong credentials', (done) => {
    supertest(app)
      .post('/login')
      .set('Accept', 'application/json')
      .send({ username: 'test', password: 'test' })
      .end(function(err, res) {
        expect(spy).to.have.been.called.once;
        done();
      });
  });
});
