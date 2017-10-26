var userModule = require('../modules/UserModule');
var jwtauth = require('../config/jwtauth');

module.exports = function(app) {
	
	// User Login
	app.get('/login', function(req, res) {
		console.log(req.body);
		userModule.authenticate(req,res);
	});
	
	// User Authenticate
	app.post('/authenticate', function(req, res) {	
		console.log(req.body);
		userModule.authenticate(req,res);
	});
	
	app.get('/logout', function(req, res) {
		userModule.logout(req,res);		
	});
	
	// Listing of Users
	app.get('/users', jwtauth, function(req, res) {
		userModule.list(req,res);
	});
	
	// Show user Form for adding
	app.get('/dashboard', jwtauth, function(req, res) {
		userModule.dashboard(req,res);
	});	
	
	/*function requireLogin (req, res, next) {
		if (!req.user) {
			res.redirect('/');
		} else {
			next();
		}
	};*/
};