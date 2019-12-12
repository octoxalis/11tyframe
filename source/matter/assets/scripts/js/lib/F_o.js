/*
 * Functions
 * Naming scheme: function__s
 */

const U_o = require( './U_o.js' )

const EXPORT_a =    // default exported data
[
  'date',
  'layout',
  'permalink',
  'tags',
  'menu_n',
  'title_s',
  'subtitle_s',
  'abstract_s',
  'author_s',
]

const MD_DIR_s = './matter/pages/'    //: all Mardown files
const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s

const OPEN_s = '[='   //: substitute__s function delimiter
const CLOSE_s = '=]'  //: idem

module.exports =
{
  siteUrl__s: ( file_s, dir_s='posts/' ) => `[${file_s.replace('_', ' ')}]: ${U_o.url_s}${dir_s}${file_s}.html`,

  tagEscape__s: content_s => content_s.replace( /</g, '&lt;' ).replace( />/g, '&gt;' ),

  files__a: () => require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } ),

  data__o: ( collection_a, permalink_s ) =>
  {
    //; console.log( permalink_s )    //: uncomment this line to output permalink
    let export_o = {}
    for ( const post_n in collection_a )
    {
      const data_o = collection_a[post_n].data
      if ( data_o.permalink === permalink_s )
      {
        if ( data_o.export_a === null ) export_o = data_o    //: get all data!
        else
        {
          const export_a = data_o.export_a || EXPORT_a    //: get declared or default data only
          export_a.forEach( prop_s => export_o[prop_s] = data_o[prop_s] )
        }
      }
    }
    //;console.log( export_o )    //: uncomment this line to output all data
    return export_o
  },
  
  substitute__s: ( hay_s, dict_o, open_s=OPEN_s, close_s=CLOSE_s ) =>
  {
    const open_n = open_s.length
    const close_n = close_s.length
    let openAt_n,
        closeAt_n,
        key_s
  
    while ( (openAt_n = hay_s.indexOf( open_s ) ) > -1 )
    {
      closeAt_n = hay_s.indexOf( close_s )
      if ( closeAt_n > -1)
      {
        closeAt_n += close_n
        key_s = hay_s.substring( openAt_n, closeAt_n )
        hay_s = hay_s.replace( key_s, dict_o[key_s.slice( open_n, -close_n )] )
      }
    }
    return hay_s
  },
  
  Boolean__b: value_ =>
  {
    if ( typeof value_ === 'boolean' ) return value_
    if (!value_) return false
    const value_s = value_.toString().toLowerCase()
    switch ( true )
    {
      case ( value_s in [ 'true', 'yes', '1' ] ) :
        return true
      case ( value_s in [ 'false', 'no', '0' ] ) :
      case null :
        return false
      default: return Boolean (value_ )
    }
  },

}
