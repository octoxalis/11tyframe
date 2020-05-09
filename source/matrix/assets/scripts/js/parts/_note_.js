var NOTE_o = Object.create( null )



NOTE_o.text__v = click_o =>
{
  const note_e = click_o.target.closest('INS')
  if ( note_e )
  {
    NOTE_o.image__v( note_e )    //: try for img
    note_e.querySelector( '[data--="note_content"]' ).classList.toggle( 'note_open' )
  }
}



NOTE_o.image__v = note_e =>
{
  const img_e = note_e.querySelector('[data-isrc]')
  if ( img_e && !img_e.getAttribute( 'load_b' ) )
  {
    const size_s = img_e.getAttribute( 'data-isize' )
    if ( size_s )
    {
      const [ width_s, height_s ] = size_s.split( ' ' )
      if ( !width_s ) return
      const widthUnit_s = ( `${parseInt( width_s )}`.length === width_s.length ) ? 'px' : ''
      let style_s = `width:${width_s}${widthUnit_s};`
      if ( height_s )
      {
        const heightUnit_s = ( `${parseInt( height_s )}`.length === height_s.length ) ? 'px' : ''
        style_s += ` height:${height_s}${heightUnit_s};`
      }
      if ( style_s ) img_e.style = style_s
    }
    img_e.src = img_e.getAttribute( 'data-isrc' )
    img_e.setAttribute( 'load_b', true )
  }
}



NOTE_o.act_o =
{
  IMG_COLOR: ( button_e, gray_s='gray', color_s='color' ) =>
    {
      const note_e = button_e.closest( '.note_open' )
      const img_e = note_e.querySelector( 'img' )
      const src_s = img_e.getAttribute( 'src' )
      if ( !src_s.includes( gray_s ) ) return
      //>
      img_e.src = src_s.replace( gray_s, color_s )
      note_e.classList.toggle( 'note_open' )
      button_e.classList.add( 'unseen' )    //: one shot button
    },
}




void function ()
{
  if ( EVENT_o.init_o.note_b ) return    //: already init
  //>
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', NOTE_o.text__v )
    EVENT_o.init_o.note_b = true
} ()
