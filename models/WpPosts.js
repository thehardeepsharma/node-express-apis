/**
*  WpPosts schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.748Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpPosts Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpPosts = schema.define('wp_posts', {
         ID: { type: schema.Number, limit: 20 },
         post_author: { type: schema.Number, limit: 20 },
         post_date: { type: schema.Date, default: '0000-00-00 00:00:00' },
         post_date_gmt: { type: schema.Date, default: '0000-00-00 00:00:00' },
         post_content: { type: schema.Text },
         post_title: { type: schema.Text },
         post_excerpt: { type: schema.Text },
         post_status: { type: schema.String, limit: 20, default: 'publish' },
         comment_status: { type: schema.String, limit: 20, default: 'open' },
         ping_status: { type: schema.String, limit: 20, default: 'open' },
         post_password: { type: schema.String, limit: 255 },
         post_name: { type: schema.String, limit: 200 },
         to_ping: { type: schema.Text },
         pinged: { type: schema.Text },
         post_modified: { type: schema.Date, default: '0000-00-00 00:00:00' },
         post_modified_gmt: { type: schema.Date, default: '0000-00-00 00:00:00' },
         post_content_filtered: { type: schema.Text },
         post_parent: { type: schema.Number, limit: 20 },
         guid: { type: schema.String, limit: 255 },
         menu_order: { type: schema.Number, limit: 11 },
         post_type: { type: schema.String, limit: 20, default: 'post' },
         post_mime_type: { type: schema.String, limit: 100 },
         comment_count: { type: schema.Number, limit: 20 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpPosts;
};
