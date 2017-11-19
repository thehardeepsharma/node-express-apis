/**
 *  Branches schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define Branches Model
 *  @param {Object} schema
 *  @return {Object}
 **/
require('../config/connection');
module.exports = function(){
    var Branches = schema.define('branches', {
         name: { type: schema.String, limit: 100 },
         contact_name: { type: schema.String, limit: 50 },
         contact_number: { type: schema.String, limit: 15 },
         email_id: { type: schema.String, limit: 100 },
         country_id: { type: schema.Number, limit: 11 },
         state_id: { type: schema.Number, limit: 11 },
         city_id: { type: schema.Number, limit: 11 },
         address: { type: schema.String, limit: 250 },
         pincode: { type: schema.String, limit: 6 },
         created: { type: schema.Date },
         created_by: { type: schema.Number, limit: 11 },
         updated: { type: schema.Date },
         updated_by: { type: schema.Number, limit: 11 }
    },{


    });

    // additional methods and validation here

    return Branches;
};
