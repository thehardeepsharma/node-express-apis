/**
 *  EmployeeBranch schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define EmployeeBranch Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var EmployeeBranch = schema.define('employee_branch', {
         employee_id: { type: schema.Number, limit: 11 },
         branch_id: { type: schema.Number, limit: 11 }
    },{


    });

    // additional methods and validation here

    return EmployeeBranch;
};
