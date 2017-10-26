/**
*  WpPostmeta schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.748Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpPostmeta Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpPostmeta = schema.define('wp_postmeta', {
         meta_id: { type: schema.Number, limit: 20 },
         post_id: { type: schema.Number, limit: 20 },
         meta_key: { type: schema.String, limit: 255 },
         meta_value: { type: schema.Text }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpPostmeta;
};
