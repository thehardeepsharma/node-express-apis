/**
 *  Holiday schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define Holiday Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var Holiday = schema.define('holiday', {
         name: { type: schema.String, limit: 200 },
         description: { type: schema.String, limit: 500 },
         from_date: { type: schema.Date },
         to_date: { type: schema.Date },
         year: { type: schema.String, limit: 4 }
    },{


    });

    // additional methods and validation here

    return Holiday;
};
