/**
 *  SystemConfig schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define SystemConfig Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var SystemConfig = schema.define('system_config', {
         config_name: { type: schema.String, limit: 50 },
         config_key: { type: schema.String, limit: 50 },
         config_value: { type: schema.Text }
    },{


    });

    // additional methods and validation here

    return SystemConfig;
};
