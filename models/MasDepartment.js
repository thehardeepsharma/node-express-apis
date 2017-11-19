/**
 *  MasDepartment schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasDepartment Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasDepartment = schema.define('mas_department', {
         role_id: { type: schema.Number, limit: 11 },
         department: { type: schema.String, limit: 50 },
         desription: { type: schema.String, limit: 250 }
    },{


    });

    // additional methods and validation here

    return MasDepartment;
};
