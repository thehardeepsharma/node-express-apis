/**
 *  LeaveGroup schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define LeaveGroup Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var LeaveGroup = schema.define('leave_group', {
         name: { type: schema.String, limit: 50 },
         status: { type: schema.Boolean, limit: 4 },
         created: { type: schema.Date },
         created_by: { type: schema.Number, limit: 11 }
    },{


    });

    // additional methods and validation here

    return LeaveGroup;
};
