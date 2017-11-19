/**
 *  EmployeeExperience schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define EmployeeExperience Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var EmployeeExperience = schema.define('employee_experience', {
         employee_id: { type: schema.Number, limit: 11 },
         company_name: { type: schema.String, limit: 200 },
         designation: { type: schema.String, limit: 100 },
         form_date: { type: schema.Date },
         to_date: { type: schema.Date },
         priority: { type: schema.Number, limit: 11 },
         created: { type: schema.Date },
         created_by: { type: schema.Number, limit: 11 },
         updated: { type: schema.Date },
         updated_by: { type: schema.Number, limit: 11 },
         ip_address: { type: schema.String, limit: 30 }
    },{


    });

    // additional methods and validation here

    return EmployeeExperience;
};
