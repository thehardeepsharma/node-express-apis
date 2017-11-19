/**
 *  MasModule schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasModule Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasModule = schema.define('mas_module', {
         module: { type: schema.String, limit: 50 },
         priority: { type: schema.Number, limit: 11 },
         description: { type: schema.String, limit: 250 }
    },{


    });

    // additional methods and validation here

    return MasModule;
};
