//file with the methods to handle the HTTP request

//reference to de provider model
const Provider = require('../models/provider.model');

//Method to create a new provider
exports.provider_create = function(req, res, next){
	let provider = new Provider({
		name: req.body.name,
		lastname: req.body.lastname,
		email: req.body.email,
		address: req.body.address,
		city: req.body.city
	});

	provider.save(function(err){
		if(err){
			return next(err);
		}
		res.send('Provider created successfully')
	})
};

//method to get the details of a provider
exports.provider_details = function(req, res, next){
	Provider.findById(req.params.id, function(err, provider){
		if(err){
			return next(err);
		}
		res.send(provider)
	})
};

//method to update the provider data
exports.provider_update = function(req, res, next){
	Provider.findByIdAndUpdate(req.params.id, {$set: req.body},
		function(err, provider){
			if(err){
				return next(err);
			}
			res.send('Provider updated')
		});
};

//method to delete a provider
exports.provider_delete = function(req, res, next){
	Provider.findByIdAndDelete(req.params.id, function(err){
		if(err){
			return next(err);
		}
		res.send('Provider deleted successfully');
	})
};