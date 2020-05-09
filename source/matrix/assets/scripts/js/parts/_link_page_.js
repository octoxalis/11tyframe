var LINK_PAGE_o = Object.create( null )



//> retrieve previous + next pages info
LINK_PAGE_o.near__o = link_s =>
{
  const list_e = document.querySelector( `[data--="menu_list"]` )
  if ( !list_e ) return     //: undefined (may be menu frame is not already loaded)
  const extension_n = '.html'.length
  const location_s = window.location.pathname.slice( 1, -extension_n )  //: trim '/' at start
  const list_a = document.querySelectorAll( `[data--="menu_list"] > li` )
  if ( !list_a ) return     //: undefined
  const list_n = list_a.length
  const current_e = list_e.querySelector( `[data-link="${location_s}"]` )
  const rank_n = +current_e.getAttribute( 'data-rank' )
  const near_n = ( link_s === 'nav_previous' ) ? rank_n - 1 : rank_n + 1
  if ( near_n < 1 || near_n > list_n ) return     //: undefined
  const near_e = list_e.querySelector( `[data-rank="${near_n}"]` )
  if ( !near_e ) return     //: undefined
  const a_e = near_e.querySelector( `span > a` )
  if ( !a_e ) return     //: undefined
  const span_e = near_e.querySelector( `span[data--="note_content"]` )
  if ( !a_e ) return     //: undefined
  return {
    link_s:     near_e.getAttribute( 'data-link' ),
    title_s:    a_e.innerHTML,
    //?? subtitle_s: '',
    abstract_s: span_e.innerHTML,
  }
}



//> insert in DOM previous + next pages info
//> show/hide previous + next pages info block
LINK_PAGE_o.near__v = ( event_s, link_e ) =>
{
  if ( link_e === null ) return
  //>
  const title_e = document.querySelector( '[data--="link_title"]' )
  const abstract_e = document.querySelector( '[data--="link_abstract"]' )
  if ( event_s === 'mouseenter' )
  {
    const link_s = link_e.getAttribute( 'data--' )
    let title_s
    let abstract_s
    const near_o = LINK_PAGE_o.near__o( link_s )
    if ( near_o !== undefined )
    {
      title_s = near_o.title_s
      abstract_s = `<i>${near_o.abstract_s}</i>`
    }
    else
    {
      title_s = 'No more {{A_o.COLLECTION_s}}'
      abstract_s = ''
    }
    title_e.innerHTML = title_s
    title_e.classList.remove( 'retract' )
    abstract_e.innerHTML = abstract_s
    abstract_e.classList.remove( 'retract' )
  }
  else
  {
    title_e.classList.add( 'retract' )
    abstract_e.classList.add( 'retract' )
  }
}



//> transform the link_s path part in a full URL
LINK_PAGE_o.url__s = link_s =>
{
  const link_o = LINK_PAGE_o.near__o( link_s )
  return link_o ? `{{U_o.url_s}}${link_o.link_s}.html` : undefined
}
