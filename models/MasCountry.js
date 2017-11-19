/**
 *  MasCountry schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasCountry Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasCountry = schema.define('mas_country', {
         country: { type: schema.String, limit: 50 },
         code: { type: schema.String, limit: 10 },
         abbr_code: { type: schema.String, limit: 10 }
    },{


    });

    // additional methods and validation here

    return MasCountry;
};
