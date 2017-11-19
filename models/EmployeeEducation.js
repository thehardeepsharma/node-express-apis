/**
 *  EmployeeEducation schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define EmployeeEducation Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var EmployeeEducation = schema.define('employee_education', {
         employee_id: { type: schema.Number, limit: 11 },
         qualification: { type: schema.String, limit: 100 },
         institute: { type: schema.String, limit: 200 },
         university: { type: schema.String, limit: 200 },
         year: { type: schema.Number, limit: 4 },
         marks: { type: schema.Float }
    },{


    });

    // additional methods and validation here

    return EmployeeEducation;
};
