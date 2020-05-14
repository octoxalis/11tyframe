const SLOT_o = require( './slot.js' )
const EXPIRES_o = require( './expires.js' )
//... const KV_SLOT_o = require( './kv_slot.js' )

let files_a   = null
let count_n   = 0
let current_n = 0


/**
 * List Markdown files to process
 */
void function ()
{
  const MD_DIR_s = './matter/pages/'    //: all Mardown files
  const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s
  files_a = require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } )
  if ( files_a ) count_n = files_a.length
} ()



const buildStart__v = data_o =>
{
  console.log( `${count_n} Markdown files to process` )
}



const buildEnd__v = data_o =>
{
  EXPIRES_o.rules__v()
}



const templateStart__s = ( input_s, data_o ) =>
{
  let start_s = input_s
  if ( data_o.expires_n ) EXPIRES_o.add__v( data_o )
  return start_s
}



const templateEnd__s = ( input_s, data_o ) =>
{
  let end_s = input_s
  //... what else?
  return end_s
}



const headEnd__s = ( input_s, data_o ) =>
{
  //... let end_s = KV_SLOT_o.js__s( KV_SLOT_o.css__s( input_s, `key=value:key=value CSS` ), `key=value:key=value JS`)    //... compute from content_s + data_o
  let end_s = input_s
  //... what else?
  return end_s
}



const bodyEnd__s = ( input_s, data_o ) =>
{
  //... CSS + JS load list ...
  //---console.log( `==========================\n${input_s}\n` )
  let body_s = SLOT_o.extract__s( input_s, data_o )
  return body_s
}



module.exports =
{
  start__s: ( input_s, data_o ) =>
  {
    if ( current_n === 0 && files_a ) buildStart__v( data_o )
    let start_s = templateStart__s( input_s, data_o )
    return start_s
  },



  end__s: ( input_s, data_o ) =>
  {
    ++current_n
    let end_s = templateEnd__s( input_s, data_o )
    if ( files_a && current_n === count_n - 1 ) buildEnd__v( data_o )
    return end_s
  },



  head__s: ( input_s, data_o ) => headEnd__s( input_s, data_o ),



  body__s: ( input_s, data_o ) => bodyEnd__s( input_s, data_o ),
}
