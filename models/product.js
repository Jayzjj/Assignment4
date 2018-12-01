// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
// Schema
var productSchema = new mongoose.Schema({
id: Number,
name: String,
isPrime: String,
price: Number,
sells_amount: Number,
});
// Return model
module.exports = restful.model('Products', productSchema);