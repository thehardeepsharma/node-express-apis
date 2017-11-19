/**
 *  LeaveBalance schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define LeaveBalance Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var LeaveBalance = schema.define('leave_balance', {
         employee_id: { type: schema.Number, limit: 11 },
         leave_type_id: { type: schema.Number, limit: 11 },
         total_leave: { type: schema.Number, limit: 11 },
         taken_leave: { type: schema.Float },
         remaining_leave: { type: schema.Float },
         leave_year: { type: schema.String, limit: 4 }
    },{


    });

    // additional methods and validation here

    return LeaveBalance;
};
