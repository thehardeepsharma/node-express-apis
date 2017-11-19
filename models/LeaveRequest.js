/**
 *  LeaveRequest schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define LeaveRequest Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var LeaveRequest = schema.define('leave_request', {
         employee_id: { type: schema.Number, limit: 11 },
         leave_type_id: { type: schema.Number, limit: 11 },
         from_date: { type: schema.Date },
         to_date: { type: schema.Date },
         no_of_days: { type: schema.Number, limit: 11 }
    },{


    });

    // additional methods and validation here

    return LeaveRequest;
};
