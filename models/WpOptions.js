/**
*  WpOptions schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.747Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpOptions Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpOptions = schema.define('wp_options', {
         option_id: { type: schema.Number, limit: 20 },
         option_name: { type: schema.String, limit: 191 },
         option_value: { type: schema.Text },
         autoload: { type: schema.String, limit: 20, default: 'yes' }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpOptions;
};
