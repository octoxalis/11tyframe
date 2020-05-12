const fs  = require('fs-extra')
const U_o = require( '../../matter/assets/scripts/js/lib/U_o.js' )
const F_o = require( '../../matter/assets/scripts/js/lib/F_o.js' )

const WRITE_TIMEOUT_n = 1000
EXPIRES_o = Object.create( null )
EXPIRES_o.rules_o = new Set()



module.exports =
{
  add__v:
  ( data_o ) => EXPIRES_o.rules_o.add( { permalink, expires_n } = data_o ),



  rules__v:
  () =>
  {
    let rules_s = ''
    for ( rule_o of EXPIRES_o.rules_o ) rules_s += `\n/${rule_o.permalink}\nExpires: ${F_o.till__s( rule_o.expires_n )}`
    if ( !rules_s ) return//>

    const path_s = '../site/_headers'
    setTimeout(
      () => fs.appendFile( path_s, rules_s, 'utf8', out_o => console.log( `-- Writing ${path_s}: ${out_o}` )),
      WRITE_TIMEOUT_n )
  },
}