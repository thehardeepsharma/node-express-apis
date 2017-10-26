/**
*  WpComments schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.746Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpComments Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpComments = schema.define('wp_comments', {
         comment_ID: { type: schema.Number, limit: 20 },
         comment_post_ID: { type: schema.Number, limit: 20 },
         comment_author: { type: schema.Text },
         comment_author_email: { type: schema.String, limit: 100 },
         comment_author_url: { type: schema.String, limit: 200 },
         comment_author_IP: { type: schema.String, limit: 100 },
         comment_date: { type: schema.Date, default: '0000-00-00 00:00:00' },
         comment_date_gmt: { type: schema.Date, default: '0000-00-00 00:00:00' },
         comment_content: { type: schema.Text },
         comment_karma: { type: schema.Number, limit: 11 },
         comment_approved: { type: schema.String, limit: 20, default: '1' },
         comment_agent: { type: schema.String, limit: 255 },
         comment_type: { type: schema.String, limit: 20 },
         comment_parent: { type: schema.Number, limit: 20 },
         user_id: { type: schema.Number, limit: 20 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpComments;
};
