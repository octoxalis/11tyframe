const REPLACE__s = require( '../lib/block_replace.js' )
const SPLIT__a   = require( '../lib/block_split.js' )
const F_o        = require( '../../matter/assets/scripts/js/lib/F_o.js' )
const C_o        = require( '../../matter/assets/scripts/js/lib/C_o.js' )

const CODES_o =
{
  anchor__s: content_s =>
  {
    const cleanContent_s = content_s.trim()
    const level_n = cleanContent_s.indexOf( ' ' )
    const title_s = cleanContent_s.substring( level_n + 1 )
    return `<h${level_n} data-slot=n>${title_s}</h${level_n}>`
  },

  note_txt__s: content_s => `<ins data--="note_txt"><sup></sup><span data--="note_content">${content_s}</span></ins>`,

  note_img__s: ( content_s, legend_a ) =>
  {
    let legend_s = ''
    if ( legend_a )
    {
      legend_a.forEach( ( at_s, at_n ) =>
        {
          if ( !at_n ) legend_s += `<em class="note_img_title">${at_s}</em><br>`
          else legend_s += `<b class="note_img_subtitle">${at_s}</b>`
        } )
    }
    return `<ins data--="note_img"><sup></sup><span data--="note_content">${content_s}<br>
      ${legend_s}</span></ins>`
  },

  note_link__s: link_a =>
  {
    let link_s = '<em class="note_link_a">'
    link_a.forEach( atlink_s =>
    {
      let act_s, gray_s, color_s
      [ act_s, symbol_s, ...arg_a ] = atlink_s.split( ',' )
      let parameter_s = ''
      arg_a.forEach( arg_s => parameter_s += `'${arg_s.trim()}',` )
      link_s += `<a class="note_link" role="button"
        onclick="NOTE_o.act_o['${act_s}']( this, ${parameter_s} )">${symbol_s}</a>`
    } )
    return link_s + `</em>`
  },

  more_to_come__s: content_s => `<p data--="important">${content_s}<em>(to be continued...)</em></p>`,

  code_block__s: content_s =>
  {
    let [ content_a, content_o ] = SPLIT__a( content_s, '_code_block' )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n<br/>\n' )  //: avoid Markdown <p> insert
    const title_s = content_o.title_s.charAt(0) === '#' ?  //: # for nonlink title
      content_o.title_s.slice(1) :    //: strip starting '#' char
      F_o.codeUrl__s( content_o.title_s )
    return `<hgroup data--="code_ref">
<h5>${title_s}</h5>
<h6><a href="https://prismjs.com" target="_blank" title="Highlighting provided by Prism.js">Prism</a></h6>
</hgroup>
<pre><code class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

  replace_all__s: content_s =>
  {
    let [ content_a, content_o ] = SPLIT__a( content_s, '_replace_all' )
    return REPLACE__s( content_o, content_a[1] )
  },

  slot__s: content_s => `<div data-slot>\n\n${content_s}\n</div>`,

  slot_css__s: id_s => `<var is=slot_css>${id_s}</var>`,

  slot_js__s: id_s => `<var is=slot_js>${id_s}</var>`,
}

module.exports = make_o =>
{
  [ 'slot_css',
    'slot_js',
    'note_link'
  ].forEach( code_s => make_o.addNunjucksShortcode( `${code_s}`, arg_ => CODES_o[ `${code_s}__s` ]( arg_ ) ) ),

  [ 'more_to_come',
    'note_txt',
    'note_img',
    'code_block',
    'replace_all',
    'anchor',
    'slot',
  ].forEach( code_s => make_o.addPairedShortcode( `_${code_s}`, content_s => CODES_o[ `${code_s}__s` ]( content_s ) ) )
}
