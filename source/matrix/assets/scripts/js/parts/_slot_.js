//XX var SLOT_o = Object.create( null )



void function ()
{
  if ( NOTE_o && NOTE_o.init_b ) return    //: already init
  //??? DOM_o.enableScript__v( 'note', true )
  //; console.log('SLOT_o')
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', NOTE_o.text__v )
} ()
