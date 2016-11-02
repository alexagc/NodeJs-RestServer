const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

const routes = require('./routes');

// Use this because deprecation on moongose promises library
mongoose.Promise = global.Promise;

function connectDatabase(mongoDatabase) {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoDatabase, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function startServer() {
  // Basic configuration
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  // Use this to log all request
  app.use(morgan('combined'));

  app.use('/api', routes);

  app.listen(3000, () => {
    console.log('Node server running on http://localhost:3000');
  });
}

module.exports = {
  startServer,
  connectDatabase
};
