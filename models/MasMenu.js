/**
 *  MasMenu schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define MasMenu Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var MasMenu = schema.define('mas_menu', {
         module_id: { type: schema.Number, limit: 11 },
         parent_id: { type: schema.Number, limit: 11 },
         menu: { type: schema.String, limit: 100 },
         priority: { type: schema.Number, limit: 11 },
         link: { type: schema.String, limit: 250 },
         description: { type: schema.String, limit: 250 },
         menu_class: { type: schema.String, limit: 20 }
    },{


    });

    // additional methods and validation here

    return MasMenu;
};
