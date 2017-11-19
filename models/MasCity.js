/**
 *  MasCity schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasCity Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasCity = schema.define('mas_city', {
         state_id: { type: schema.Number, limit: 11 },
         city: { type: schema.String, limit: 50 }
    },{


    });

    // additional methods and validation here

    return MasCity;
};
