/**
*  WpLinks schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.747Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpLinks Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpLinks = schema.define('wp_links', {
         link_id: { type: schema.Number, limit: 20 },
         link_url: { type: schema.String, limit: 255 },
         link_name: { type: schema.String, limit: 255 },
         link_image: { type: schema.String, limit: 255 },
         link_target: { type: schema.String, limit: 25 },
         link_description: { type: schema.String, limit: 255 },
         link_visible: { type: schema.String, limit: 20, default: 'Y' },
         link_owner: { type: schema.Number, limit: 20, default: 1 },
         link_rating: { type: schema.Number, limit: 11 },
         link_updated: { type: schema.Date, default: '0000-00-00 00:00:00' },
         link_rel: { type: schema.String, limit: 255 },
         link_notes: { type: schema.Text },
         link_rss: { type: schema.String, limit: 255 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpLinks;
};
