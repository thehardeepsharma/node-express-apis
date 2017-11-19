/**
 *  EmployeeDesignation schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define EmployeeDesignation Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var EmployeeDesignation = schema.define('employee_designation', {
         employee_id: { type: schema.Number, limit: 11 },
         designation_id: { type: schema.Number, limit: 11 }
    },{


    });

    // additional methods and validation here

    return EmployeeDesignation;
};
