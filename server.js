const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const router = new express.Router();

// Controllers
const ItemsCtrl = require('./app/controllers/itemController');

// Basic configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use this to log all request
app.use(morgan('combined'));

// The reques always past for this code
router.get('/', (req, res) => {
  // In this part of code the rest api needs to return all available resources
  // res.send(JSON.stringify(router.stack));
});

// TODO all the routes need to be in separate files outside the server launch
router.route('/items')
  .get(ItemsCtrl.findAllItems)
  .post(ItemsCtrl.addItem);

app.use('/api', router);

// TODO the connection to the mongoDb needs to be configurable
mongoose.connect('mongodb://localhost/test', (err, res) => {
  if (err) {
    console.log(`ERROR: connecting to Database. ${err}`);
  }
  app.listen(3000, () => {
    console.log('Node server running on http://localhost:3000');
  });
});
