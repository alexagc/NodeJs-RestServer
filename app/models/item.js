const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  description: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  type: {
    type: String,
    enum: ['saleItem', 'factoryItem']
  }
});

module.exports = mongoose.model('Items', itemSchema);
