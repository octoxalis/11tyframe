var EVENT_o = Object.create( null )



EVENT_o.init_o =
{
  note_b: false,    // NOTE_o
}


/**
 * Register Service worker
 */

EVENT_o.service__v =
() =>
{
  if ( 'serviceWorker' in navigator )
  {
    window.addEventListener( 'load', SERVICE_o.init__v( '{{U_o.url_s}}{{U_o.SERVICE_PATH_s}}' ) )
  }
}



/**
 * Change UI base color + light/dark mode
 */

EVENT_o.skin__v =
() =>
{
  //: Open IndexedDB
  //: to store UI base color + light/dark mode
  SKIN_o.hueBase__v()
  SKIN_o.lumMode__v()

  const header_e = document.querySelector( '[data--="band_title"]' )
  header_e.addEventListener('click', click_o =>
    {
      const atX_n = click_o.clientX - header_e.getBoundingClientRect().left
      const width_n = header_e.offsetWidth
      const hue_n = ~~( ( atX_n / width_n ) * 360 )
      SKIN_o.hueBase__v( hue_n )
      
      const atY_n = click_o.clientY - header_e.getBoundingClientRect().top
      const height_n = header_e.offsetHeight
      const mode_n = atY_n > ( height_n * 0.5 ) ? -1 : 1
      SKIN_o.lumMode__v( mode_n )
    } )
}


/**
 * Create slots to load
 */
EVENT_o.slots__v =
() =>
{
  for ( const tag_e of document.querySelectorAll( `[${'data-slot'}]` ) )
  {
    tag_e.addEventListener( 'click',
    () =>
    {
      const slot_s = tag_e.getAttribute( 'data-slot' )
      let section_e = document.querySelector( `section[data-slot="${slot_s}"]` )
      if ( section_e ) return void section_e.classList.toggle( 'unseen' )
      //>
//.......................
performance.mark( 'EVENT_o.slots__v:start' )
//.......................
      section_e = document.createElement( 'section' )
      section_e.setAttribute( 'data-slot', slot_s )
      let href_s = window.location.href
      if ( href_s === '{{U_o.url_s}}' ) href_s += 'index.html'    //: if site index, 'index.html' could have been removed
      section_e.setAttribute( 'data-src', href_s.replace( '.html', `_${slot_s}` ) )
      const iframe_e = document.createElement( 'iframe' )
      section_e.appendChild( iframe_e )
      tag_e.after( section_e )
      DOM_o.adoptFrame__v( section_e, () => DOM_o.enableScript__v( 'note', true ) )
//.......................
performance.mark( 'EVENT_o.slots__v:end' )
//.......................
    } )
  }
}



/**
 * Page link click+hover handler
 * to show menu or go to another page
*/

EVENT_o.navigation__v =
() =>
{
  const pageNav_e = document.querySelector( '[data--="page_nav"]' )
  if ( !pageNav_e ) return
  //>
  pageNav_e.addEventListener('click',
    click_o => 
    {
      const nav_e = click_o.target.closest('BUTTON')
      if ( !nav_e ) return
      //>
      let nav_s = nav_e.getAttribute( 'data--' )
      switch ( nav_s )
      {
        case ( 'nav_menu' ) : return void EVENT_o.menu__v()
        case ( 'nav_top' ) :
        case ( 'nav_bottom' ) : return void DOM_o.scroll__v( nav_s === 'nav_bottom' )
        case ( 'nav_previous' ) :
        case ( 'nav_next' ) :
        {
          if ( document.querySelector( `[data--="menu_iframe"]` ) ) return  //: menu not yet loaded
          const http_s = LINK_PAGE_o.url__s( nav_s )
          if ( http_s ) window.location = http_s
        }
      }
    } )

  document.querySelectorAll( '[data--="page_nav"] > button' )
    .forEach( nav_e =>
    {
      switch ( nav_e.getAttribute( 'data--' ) )
      {
        case 'nav_top' :
        case 'nav_bottom' :
        case 'nav_menu' : return
      }
      //>
      ; [ 'mouseenter', 'mouseleave' ]
        .forEach( event_s => nav_e.addEventListener( event_s,
          mouse_o =>
          {
            if ( document.querySelector( `[data--="menu_iframe"]` ) ) return  //: menu not yet loaded
            //>
            LINK_PAGE_o.near__v( event_s, mouse_o.currentTarget )
          } ) )
  } )
    
}




/**
 * Scroll progress handler
*/

EVENT_o.scroll__v = () =>
{
  const doc_e      = document.documentElement
  const body_e     = document.body
  const top_s      = 'scrollTop'
  const height_s   = 'scrollHeight'
  const progress_e = document.querySelector('[data--=page_scroll]')

  const scroll__n = () => ( doc_e[top_s] || body_e[top_s] ) /
    ( (doc_e[height_s] || body_e[height_s] ) - doc_e.clientHeight ) * 100

  const progress__v = () => progress_e.style.setProperty('--scroll', `${scroll__n()}%`)  
  
  document.addEventListener( 'scroll', progress__v )
}
EVENT_o.scroll__v()



EVENT_o.menu__v =
() =>
{
  if ( document.querySelector( `[data--="menu"]` ) ) return void MENU_o.toggle__v()  //: menu already loaded
  //>
  //.......................
  performance.mark( 'EVENT_o.menu__v:start' )
  //.......................
  const menu_e = document.querySelector( '[data-src="{{ U_o.url_s }}menu"]' )
  const iframe_e = document.createElement( 'iframe' )
  iframe_e.setAttribute( 'data--', 'menu_iframe' )
  menu_e.appendChild( iframe_e )

  DOM_o.adoptFrame__v( menu_e, () =>
    {
      [ 'note',
        'menu'].forEach( load_s => DOM_o.enableScript__v( load_s, true ) )
    } )

  //..........................
  performance.mark( 'EVENT_o.menu__v:end' )
  //..........................
}



/**
 * Comment visibility click handler
 * to show/hide comment
 */

EVENT_o.comment__v =
() =>
{
  const switch_e = document.querySelector( '[data--="comment_visibility"]' )
  if ( switch_e ) switch_e.addEventListener('click', click_o => COMMENT_o.init__v() )
}



/**
 * Performance visibility click handler
 * to show/hide performance
 */

EVENT_o.performance__v =
() =>
{
  const switch_e = document.querySelector( '[data--="perf_visibility"]' )
  if ( switch_e ) switch_e.addEventListener('click', click_o => PERF_o.init__v() )
}


void function ()
{
  //XX const body_e =   document.getElementsByTagName( 'body')[0]
  //XX body_e.classList.add( 'fade_in' )
  //XX body_e.classList.remove( 'fade' )
  ;[ 
    'service',
    'skin',
    'slots',
    'navigation',
    'performance',
    'comment',
  ].forEach( method_s => EVENT_o[`${method_s}__v`]() )
} ()
