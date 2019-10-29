/*
 * Functions
 * Naming scheme: function__s
 */
const U_o = require( './U_o.js' )

module.exports =
{
  siteUrl__s: ( file_s, dir_s='posts/' ) => `[${file_s.replace('_', ' ')}]: ${U_o.url_s}${dir_s}${file_s}.html`,

  tagEscape__s: content_s => content_s.replace( /</g, '&lt;' ).replace( />/g, '&gt;' ),

}
