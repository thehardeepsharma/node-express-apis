/**
*  WpTermRelationships schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.749Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpTermRelationships Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpTermRelationships = schema.define('wp_term_relationships', {
         object_id: { type: schema.Number, limit: 20 },
         term_taxonomy_id: { type: schema.Number, limit: 20 },
         term_order: { type: schema.Number, limit: 11 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpTermRelationships;
};
