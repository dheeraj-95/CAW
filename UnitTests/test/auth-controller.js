const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../');
const AuthController = require('../controllers/auth-controller-test');

describe('Auth Controller', function() {
  before(function(done) {
    mongoose
      .connect(
        'mongodb+srv://dheeraj:R4JOnYBqu4dd4vy7@cluster0-glaug.mongodb.net/movies?retryWrites=true'
      )
      .then(result => {
        const user = new User({
          email: 'test@test.com',
          password: 'tester',
          name: 'Test',
          _id: '5c0f66b979af55031b34728a'
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  beforeEach(function() {});

  afterEach(function() {});

  it('should throw an error with code 500 if accessing the database fails', function(done) {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester'
      }
    };

    AuthController.login(req, {}, () => {}).then(result => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    User.findOne.restore();
  });

  after(function(done) {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
