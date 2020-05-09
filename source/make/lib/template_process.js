const SLOT_o = require( './slot.js' )
//?? const HEADER_o = require( './header.js' )

let files_a       = null
let count_n       = 0
let current_n     = 0



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
  //... what else?
}



const templateStart__s = ( input_s, data_o ) =>
{
  let start_s = input_s
  //... what else?
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
  //... HEADER_o.insertJS__s( HEADER_o.insertCSS__s( input_s, data_o ), data_o )
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
    if ( current_n === 0 && !files_a ) buildStart__v( data_o )
    let start_s = templateStart__s( input_s, data_o )
    return start_s
  },



  head__s: ( input_s, data_o ) => headEnd__s( input_s, data_o ),



  body__s: ( input_s, data_o ) => bodyEnd__s( input_s, data_o ),



  end__s: ( input_s, data_o ) =>
  {
    ++current_n
    let end_s = templateEnd__s( input_s, data_o )
    if ( current_n === count_n && files_a ) buildEnd__v( data_o )
    return end_s
  },
}
