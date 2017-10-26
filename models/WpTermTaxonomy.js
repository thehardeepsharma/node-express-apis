/**
*  WpTermTaxonomy schema
*
*  @version     0.0.1
*  @created     2017-10-25T04:26:26.750Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  WpTermTaxonomy Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var WpTermTaxonomy = schema.define('wp_term_taxonomy', {
         term_taxonomy_id: { type: schema.Number, limit: 20 },
         term_id: { type: schema.Number, limit: 20 },
         taxonomy: { type: schema.String, limit: 32 },
         description: { type: schema.Text },
         parent: { type: schema.Number, limit: 20 },
         count: { type: schema.Number, limit: 20 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return WpTermTaxonomy;
};
