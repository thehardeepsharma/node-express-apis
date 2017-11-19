/**
 *  EmployeeBankDetails schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define EmployeeBankDetails Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var EmployeeBankDetails = schema.define('employee_bank_details', {
         employee_id: { type: schema.Number, limit: 11 },
         bank_name: { type: schema.String, limit: 100 },
         account_number: { type: schema.String, limit: 20 },
         ifsc_code: { type: schema.String, limit: 20 },
         branch: { type: schema.String, limit: 100 },
         created: { type: schema.Date },
         created_by: { type: schema.Number, limit: 11 },
         updated: { type: schema.Date },
         updated_by: { type: schema.Number, limit: 11 },
         ip_address: { type: schema.String, limit: 30 }
    },{


    });

    // additional methods and validation here

    return EmployeeBankDetails;
};
