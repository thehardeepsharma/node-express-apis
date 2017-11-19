/**
*  Members schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.750Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Members Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
require('../config/connection');
module.exports = function() {
    var Members = schema.define('members', {
		id: { type: schema.Number, limit: 20 },
		branch_id: { type: schema.Number, limit: 20 },
		member_code: { type: schema.String, limit: 60 },
		username: { type: schema.String, limit: 255 },
		password: { type: schema.String, limit: 50 },
		user_role: { type: schema.String, limit: 100 },
		sponsor: { type: schema.String, limit: 100 },
		created_at: { type: schema.Date, default: '0000-00-00 00:00:00' }
    },{
		primaryKeys: ["id"]	
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Members;
};
