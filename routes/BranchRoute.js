var branchModule = require('../modules/BranchModule');
var jwtauth = require('../config/jwtauth');

module.exports = function(app) {
	
	// Listing of Users
	app.get('/branches/:page/:limit', jwtauth, function(req, res) {
		branchModule.list(req,res);
	});
	
	// Show user Form for adding
	app.post('/branch/add', jwtauth, function(req, res) {
		branchModule.add(req,res);
	});	
};