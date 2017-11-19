/**
 *  MasState schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasState Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasState = schema.define('mas_state', {
         country_id: { type: schema.Number, limit: 11 },
         state: { type: schema.String, limit: 100 },
         code: { type: schema.String, limit: 10 }
    },{


    });

    // additional methods and validation here

    return MasState;
};
