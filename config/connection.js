var mysql = require('mysql');
var caminte = require('caminte');
var Schema = caminte.Schema;
var config = {
	driver     : "mysql", // mariadb
	host       : "localhost",
	port       : "3306",
	username   : "root",
	password   : "",
	database   : "pharmacy",
	pool       : true // optional for use pool directly 
};

var exports = schema = new Schema(config.driver, config);