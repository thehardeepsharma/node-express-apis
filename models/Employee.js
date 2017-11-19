/**
 *  Employee schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define Employee Model
 *  @param {Object} schema
 *  @return {Object}
 **/
require('../config/connection');
module.exports = function(){
    var Employee = schema.define('employee', {
         first_name: { type: schema.String, limit: 50 },
         middle_name: { type: schema.String, limit: 50 },
         last_name: { type: schema.String, limit: 50 },
         username: { type: schema.String, limit: 50 },
         password: { type: schema.String, limit: 100 },
         email_id: { type: schema.String, limit: 120 }
    },{


    });

    // additional methods and validation here

    return Employee;
};
