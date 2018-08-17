//Here we define how will be the structure of the document 

//add required dependecies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProviderSchema = new Schema({
	name: {type: String, required: true, max: 30},
	lastname: {type: String, required: true, max: 40},
	email: {type: String, required: true, max: 50},
	address: {type: String, required: true, max: 100},
	city: {type: String, required: true, max: 20}
});

//exporting the schema for public use in the project
module.exports = mongoose.model('providers', ProviderSchema);