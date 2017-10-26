/**
*  WpLayerslider schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.747Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpLayerslider Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpLayerslider = schema.define('wp_layerslider', {
         author: { type: schema.Number, limit: 10 },
         name: { type: schema.String, limit: 100 },
         slug: { type: schema.String, limit: 100 },
         data: { type: schema.Text },
         date_c: { type: schema.Number, limit: 10 },
         date_m: { type: schema.Number, limit: 11 },
         flag_hidden: { type: schema.Boolean, limit: 1, default: 0 },
         flag_deleted: { type: schema.Boolean, limit: 1, default: 0 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpLayerslider;
};
