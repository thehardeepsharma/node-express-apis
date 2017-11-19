var moment = require('moment');
var Branch = require('../models/Branches');
var branch = new Branch();

module.exports = {
	list: function(req,res) {
		param = req.params;
		console.log(param);
		var skip = 0;
		if(param.page > 1) {
			skip = (parseInt(param.page) - 1) * parseInt(param.limit);
		}
		var limit = param.limit ? parseInt(param.limit) : 1;
		
		var opts = {
			skip: skip,
			limit: limit,
			where: {},
			order: 'name ASC'
		};
		
		branch.count(opts.where, function (err, count) {
			if (err) {
			   res.status(400);
			   return res.json(err.message || err);
			}
			branch.all(opts, function(brancherr, data) {
				if (brancherr) {
				   res.status(400);
				   return res.json(brancherr.message || brancherr);
				}
				res.status( 200 );
				res.json( {
				   total: count,
				   branches: data
				});
			});
	   });
		
		
	},
	
	get: function(req,res) {		
		branch.findOne({where: {id: req.body.id}}, function(err, data) {
		   res.send(data);
		});
	},
	
	add: function(req,res) {
		console.log(req.body);
		branchData = req.body;
		branchData.ip_address = req.connection.remoteAddress;
		branchData.created = moment().format();
		branchData.created_by = '1';
			
		branch.create(req.body,function(err, data) {
			if(err) {
				return res.json({
					response_code: 401,
					message: 'Invalid data'
				});
			} else {
				return res.json({
					response_code: 200,
					data: data
				});
			}
		});
	},
	
	/*list: function(req,res) {
		user.all(function(err, data) {
		   //console.log(data);
		   return res.send(data);
		});
	},*/
	
}