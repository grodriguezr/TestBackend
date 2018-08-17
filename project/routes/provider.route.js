//file with the routes to use the http methods in the rest service
//each method has the route to make the HTTP request and references the controller method to handle it

//required dependencies
const express = require('express');
const router = express.Router();

//require the controllers
const provider_controller = require('../controllers/provider.controller');


//route for POST method, with this we can create a new provider
router.post('/create', provider_controller.provider_create);

//route for GET method, with this we can get the details of a provider 
router.get('/:id', provider_controller.provider_details);

//route for PUT method, with this we can update de data of a provider
router.put('/:id/update', provider_controller.provider_update);

//route for DELETE method, with this we can delete a provider
router.delete('/:id/delete', provider_controller.provider_delete);

//exports the router for public use in the app
module.exports = router;

