//add required dependecies
const express = require('express');
const bodyParser = require('body-parser');

const provider = require('./routes/provider.route');//imports routes

//initialize server
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//middleware to handle json in the HTTP requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//schema to be used by the application
app.use('/provider', provider);


//port where the server will be running
let port = 3000;

//function to assign the port where the app will listen
app.listen(port, () => 
{
	console.log('Server is running on port number '+ port);
});