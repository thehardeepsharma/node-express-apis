/**
 *  LeaveType schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define LeaveType Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var LeaveType = schema.define('leave_type', {
         leave_group_id: { type: schema.Number, limit: 11 },
         code: { type: schema.String, limit: 5 },
         description: { type: schema.String, limit: 500 }
    },{


    });

    // additional methods and validation here

    return LeaveType;
};
