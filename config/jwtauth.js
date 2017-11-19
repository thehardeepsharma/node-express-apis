var jwt = require('jwt-simple');

module.exports = function(req, res, next) {	
	
	var token = (req.body && req.body.authorization) || (req.query && req.query.authorization) || req.headers.authorization;
	if (token) {
		try {
			var decoded = jwt.decode(token, app.get('JWT_TOKEN_SECRET'));
			console.log('--------------');
			console.log(decoded);
			if (decoded.exp <= Date.now()) {
				res.json({
					response_code : 400,
					message: 'Access token has expired'
				});
			} else {
				next();	
			}				
		} catch (err) {
			res.json({
				response_code : 401,
				message: 'Invalid token'
			});
		}
	} else {
		res.json({
			response_code : 400,
			message: 'Access token not found'
		});
	}
};