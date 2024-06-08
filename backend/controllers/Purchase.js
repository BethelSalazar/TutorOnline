const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
