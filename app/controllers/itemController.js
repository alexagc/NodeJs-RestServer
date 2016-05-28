var mongoose = require('mongoose');
var Items = require('../models/item');

//GET - Return all items in the DB
exports.findAllItems = function (req, res) {
    Items.find(function (err, items) {
        if (err) {
            res.send(500, err.message);
        }
        res.status(200).jsonp(items);
    });
};

//POST - Insert a new TVShow in the DB
exports.addItem = function (req, res) {

    var item = new Items({
       /* title: req.body.title,
        year: req.body.year,
        country: req.body.country,
        poster: req.body.poster,
        seasons: req.body.seasons,
        genre: req.body.genre,
        summary: req.body.summary*/
        description: 'Item test',
        quantity: 95,
        price: 65.21,
        type: 'saleItem'
    });

    item.save(function(err) {
        if(!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

};