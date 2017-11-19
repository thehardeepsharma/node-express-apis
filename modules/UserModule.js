var User = require('../models/Employee');
var jwt = require('jwt-simple');
var moment = require('moment');
var md5 = require('md5');
var user = new User();

module.exports = {
	authenticate: function(req,res) {
		username = req.body.username;
		password = req.body.password;
		user.findOne({where: {username: username}}, function(err, response) {
			if(err) { 
				return res.send({'response_code': 400,'message': 'Server down, please try after some time!'});	
			} 
			if(response === null || response.length == 0) { 
				return res.send({'response_code': 401,'message': 'Invalid username/password, try again!'});	
			}
			if(user) {
				if(md5(password) != response.password) {
					return res.send({'response_code': 401,'message': 'Invalid Invalid username/password, try again!'});
				} else {
					var expires = moment().add(120,'m').valueOf();
					var token = jwt.encode({
					  iss: response.id,
					  exp: expires
					}, app.get('JWT_TOKEN_SECRET'));
					return res.json({
						response_code: 200,
						token : token,
						expires: expires,
						data: response
					});
				}
			}
		});
	},
	
	list: function(req,res) {
		user.all(function(err, data) {
		   //console.log(data);
		   return res.send(data);
		});
	},
	
}