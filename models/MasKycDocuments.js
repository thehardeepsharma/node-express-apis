/**
 *  MasKycDocuments schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasKycDocuments Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasKycDocuments = schema.define('mas_kyc_documents', {
         name: { type: schema.String, limit: 50 }
    },{


    });

    // additional methods and validation here

    return MasKycDocuments;
};
