var User = require('../models/WpUsers');
var jwt = require('jwt-simple');
var moment = require('moment');
var md5 = require('md5');
var user = new User();

module.exports = {
	login: function(req,res) {
		user.findOne({where: {user_login: 'admin'}, order: 'user_login DESC'}, function(err, data) {
		   console.log(data);
		   res.send(data);
		});
	},
	
	authenticate: function(req,res) {
		username = req.body.username;
		password = req.body.password;
		user.findOne({'user_login': username}, function(err, data) {
			if(err) { console.log(err); } 
			if(data === null || data.length == 0) { 
				return res.send({'response_code': 401,'message': 'Invalid username/password, try again!'});	
			}
			if(user) {
				if(md5(password) != data.user_pass) {
					return res.send({'response_code': 401,'message': 'Invalid password, try again!'});
				} else {
					var expires = moment().add(1,'m').valueOf();
					var token = jwt.encode({
					  iss: data.id,
					  exp: expires
					}, app.get('JWT_TOKEN_SECRET'));
					data.token = token;
					return res.json({
					  token : token,
					  expires: expires,
					  data: data
					});
				}
			}
		});
	},
	
	list: function(req,res) {
		user.all(function(err, data) {
		   console.log(data);
		   res.send(data);
		});
	},
	
}