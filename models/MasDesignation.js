/**
 *  MasDesignation schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasDesignation Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasDesignation = schema.define('mas_designation', {
         department_id: { type: schema.Number, limit: 11 },
         designation: { type: schema.String, limit: 50 },
         desription: { type: schema.String, limit: 250 }
    },{


    });

    // additional methods and validation here

    return MasDesignation;
};
