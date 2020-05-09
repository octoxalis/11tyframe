var MENU_o = Object.create( null )



//: show/hide posts menu list
MENU_o.toggle__v = () =>
{
  let show_s
  let method_s
  if ( DOM_o.rootVar__s( '--MENU_SHOW' ) === '1' )
  {
    show_s = '0'
    method_s = 'add'
  }
  else
  {
    show_s = '1'
    method_s = 'remove'
  }
  document.querySelector( `[data--="menu"]` )
    .classList[method_s]( 'no_pointer' )
  DOM_o.rootVar__v( '--MENU_SHOW', show_s )
}
MENU_o.toggle__v()    //: has to be shown after script loading



void function ()
{
  //: show previous/next post
  ; [ 'nav_previous', 'nav_next' ]
    .forEach( data_s =>
      {
        const link_e = document.querySelector( `[data--=${data_s}]` )
        if ( !link_e ) return    //: index.html has no links to previous/next
        //>
        link_e.removeAttribute( 'disabled' )
      } )

  //: Menu order click handler
  //: to sort posts by reverse order
  document.querySelector( '[data--="menu_order"]' )
    .addEventListener('click',
      click_o => click_o.target.closest('div') && DOM_o.listReverse__v( '[data--="menu_list"]' ) )
  
} ()
