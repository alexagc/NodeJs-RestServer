var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
    description: {type: String},
    quantity: {type: Number},
    price: {type: Number},
    type: {
        type: String, enum: ['saleItem', 'factoryItem']
    }
});

module.exports = mongoose.model('Items', itemSchema);