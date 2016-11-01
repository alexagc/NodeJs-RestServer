const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saleSchema = new Schema({
  date: { type: Date },
  quantity: { type: Number },
  items: [{
    id: { type: Number },
    quantity: { type: Number }
  }]
});

module.exports = mongoose.model('Sales', saleSchema);
