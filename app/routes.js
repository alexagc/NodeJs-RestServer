const express = require('express');

const routes = new express.Router();

// Controllers
const ItemsCtrl = require('./controllers/itemController');

// The request always past for this code
routes.get('/', (req, res) => {
  // In this part of code the rest api needs to return all available resources
  res.set('Content-Type', 'application/json;charset=UTF-8');
  res.send(JSON.stringify(routes.stack));
});

routes.route('/items')
  .get(ItemsCtrl.findAllItems)
  .post(ItemsCtrl.addItem)
  .delete(ItemsCtrl.deleteItem);

module.exports = routes;
