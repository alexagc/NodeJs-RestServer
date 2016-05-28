var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var saleSchema = new Schema({
    date: {type: Date},
    quantity: {type: Number},
    items: [{
        id: {type: Number},
        quantity: {type: Number}
    }]
});

module.exports = mongoose.model('Sales', saleSchema);