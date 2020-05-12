const fs  = require('fs-extra')
const U_o = require( '../../matter/assets/scripts/js/lib/U_o.js' )
const C_o = require( '../../matter/assets/scripts/js/lib/C_o.js' )



const linkHtml__s = id_s => `<link id="${id_s}" disabled=true rel="stylesheet" media="print" href="${U_o.url_s}assets/styles/css/${id_s}.min.css">\n`



const scriptHtml__s = id_s => `<var id="${id_s}" hidden>DOM_o.enableScript__v( '${id_s}', true )</var>\n`  //?? 'load'


const enable_a =
{
  ['SLOT_CSS_TAG_s']: id_s => `<script>window.parent.DOM_o.enableLink__v('${id_s}')</script>\n`,
  ['SLOT_JS_TAG_s']:  id_s => `<script>window.parent.DOM_o.enableScript__v('${id_s}', true )</script>\n`
}



const rank__s =
( body_s, need_s='<h2 data-slot=n>', count_s='n' ) =>
{
  const string_a = body_s.split( need_s )
  let replaced_s = ''
  let at_n = 0
  for ( const at_s of string_a )
  {
    replaced_s += at_s
    if ( at_n < string_a.length - 1 ) replaced_s += need_s.replace( count_s, at_n )
    ++at_n
  }
  return replaced_s
}



const asset__s =
( slot_s, asset_a, tag_s='SLOT_CSS_TAG_s' ) =>
{
  const regex_o = new RegExp( C_o[tag_s], 'g' )
  const match_a = slot_s.matchAll( regex_o )
  for ( atMatch_a of match_a )
  {
    const [match_s, id_s] = atMatch_a
    asset_a.add( id_s )
    slot_s = slot_s.replace( match_s, enable_a[tag_s]( id_s ) )
  }
  return slot_s
}



const save__v =
( slot_a, data_o ) =>
{
  const permalink_s = data_o.permalink
  const name_s = permalink_s.substring( permalink_s.lastIndexOf( '/' ) + 1, permalink_s.indexOf( '.' ) )
  let at_n = 0
  for ( const slot_s of slot_a )
  {
    const body_s = slot_s.replace( C_o.SLOT_OPEN_s, `<div data-slot=${at_n}>` ).replace( C_o.SLOT_CLOSE_s, `<div>` )
    const file_s = permalink_s.replace( '.', `_${at_n}.` )
    const path_s = `../site/${file_s}`
    fs.outputFile( path_s, body_s, out_o => console.log( `-- Writing ${path_s} from ./matter/pages/${name_s}.md: ${out_o}` ) )
    ++at_n
  }
}



module.exports =
{
  extract__s: ( body_s, data_o ) =>
  {
    let content_s = rank__s( body_s )
    const slot_a = []
    const link_a  = new Set()
    const script_a   = new Set()
    let linkSlot_s = ''
    let at_n = 0
    const match_a = content_s.matchAll( new RegExp( C_o.SLOT_SLICE_s, 'g' ) )
    for ( const atMatch_a of match_a )
    {
      const [ match_s ] = atMatch_a
      let slot_s = asset__s( match_s, link_a, 'SLOT_CSS_TAG_s' )
      slot_s = asset__s( slot_s, script_a, 'SLOT_JS_TAG_s' )
      slot_a.push( slot_s )
      content_s = content_s.replace( match_s, '' )    //: extract slot
      const file_s = data_o.permalink.replace( '.', `_${at_n}.` )    //;console.log( file_s )
      linkSlot_s += `\n<link itemprop="url" href="${U_o.url_s}${file_s}" />`
      ++at_n
    }
    save__v( slot_a, data_o )
    let link_s   = ''
    for ( key_s of link_a ) link_s += linkHtml__s( key_s )
    let script_s = ''
    for ( key_s of script_a ) script_s += scriptHtml__s( key_s )
    content_s = content_s
      .replace( '__ARTICLE_URLS__', linkSlot_s )
      .replace( '</body>', `${script_s}${link_s}</body>` )
    return content_s
  },
}
