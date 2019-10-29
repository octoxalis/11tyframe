const A_o = require( '../../matter/assets/scripts/js/lib/A_o.js' )

module.exports = make_o =>
{
  make_o.addCollection( A_o.COLLECTION_s, collection_a => collection_a.getFilteredByTag( A_o.COLLECTION_s ) )
}
