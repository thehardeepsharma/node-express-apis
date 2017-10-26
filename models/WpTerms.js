/**
*  WpTerms schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.749Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpTerms Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpTerms = schema.define('wp_terms', {
         term_id: { type: schema.Number, limit: 20 },
         name: { type: schema.String, limit: 200 },
         slug: { type: schema.String, limit: 200 },
         term_group: { type: schema.Number, limit: 10 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpTerms;
};
