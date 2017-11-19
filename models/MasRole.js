/**
 *  MasRole schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasRole Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasRole = schema.define('mas_role', {
         role: { type: schema.String, limit: 20 },
         description: { type: schema.String, limit: 200 },
         status: { type: schema.Boolean, limit: 4, default: 1 }
    },{


    });

    // additional methods and validation here

    return MasRole;
};
