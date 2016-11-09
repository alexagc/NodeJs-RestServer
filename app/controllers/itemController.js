const Items = require('../models/item');

// GET - Return all items in the DB
function findAllItems(req, res) {
  Items.find((err, items) => {
    if (err) {
      res.send(500).send(err.message);
    }
    res.status(200).jsonp(items);
  });
}

// POST - Insert a new item in the DB
function addItem(req, res) {
  const item = new Items({
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price,
    type: req.body.type
  });

  item.save((err) => {
    if (!err) {
      res.status(201).send(item);
    } else {
      res.status(500).send(err.errors.type.message);
    }
  });
}

// DELETE - Delete one regystry from db
function deleteItem(req, res) {
  Items.findOneAndRemove(req.body, (err, doc) => {
    if (err) {
      res.status(500).send(err.errors.type.message);
    } else if (!doc || req.body) {
      res.status(500).send('The document doesnt\'s exists');
    } else {
      res.sendStatus(200);
    }

  });
}

module.exports = {
  findAllItems,
  addItem,
  deleteItem
};
