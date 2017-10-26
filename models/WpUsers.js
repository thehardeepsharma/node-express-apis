/**
*  WpUsers schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.750Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpUsers Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
require('../config/connection');
module.exports = function() {
    var WpUsers = schema.define('wp_users', {
		ID: { type: schema.Number, limit: 20 },
		user_login: { type: schema.String, limit: 60 },
		user_pass: { type: schema.String, limit: 255 },
		user_nicename: { type: schema.String, limit: 50 },
		user_email: { type: schema.String, limit: 100 },
		user_url: { type: schema.String, limit: 100 },
		user_registered: { type: schema.Date, default: '0000-00-00 00:00:00' },
		user_activation_key: { type: schema.String, limit: 255 },
		user_status: { type: schema.Number, limit: 11, index: true },
		display_name: { type: schema.String, limit: 250 }
    },{
		primaryKeys: ["ID"]	
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpUsers;
};
