var DOM_o = Object.create( null )



DOM_o.rootVar__s = var_s => window.getComputedStyle( document.documentElement ).getPropertyValue( var_s ) || ''



DOM_o.rootVar__v = ( var_s, val_s ) => document.documentElement.style.setProperty( var_s, val_s )



DOM_o.eval__v = code_s => code_s && (new Function( code_s ))()



DOM_o.adopt__v =
( adopter_e, adopted_e, callback_f ) =>
{
  adopted_e.addEventListener('load',
    () =>
    {
      adopter_e.appendChild( document.adoptNode( ( adopted_e.contentDocument.body||adopted_e.contentDocument ).children[0] ) )
      adopted_e.remove()
      callback_f && callback_f( adopter_e )
    } )
}



DOM_o.adoptFrame__v =
( adopt_e, callback_f ) =>
{
  const iframe_e = adopt_e.querySelector( 'iframe' )
  if ( !iframe_e ) return
  //>
  DOM_o.adopt__v( adopt_e, iframe_e, callback_f)
  iframe_e.src = adopt_e.getAttribute( 'data-src' ) + '.html'
}


/**
 * HTML:
 * <ol data--="selector">
 *   <li>primo</li>
 * </ol>
 * JS:
 * DOM_o.listReverse__v( '[data--="["selector"]' )
 * 
 */
DOM_o.listReverse__v =
selector_s =>
{
  const nodes_a = Array.prototype.slice.call(document.querySelectorAll( `${selector_s} li` ))
  nodes_a && nodes_a.forEach( node_e => node_e.parentNode.insertBefore( node_e, node_e.parentNode.firstChild ) )
}



DOM_o.scroll__v =
bottom_b =>
{
  const options_o =
    {
      top: bottom_b ? document.querySelector( 'body' ).offsetHeight : 0,
      left: 0,
      behavior: 'smooth'
    }
  window.scroll( options_o )
}



/**
 * @param {*} src_s 
 * <link href="href_s" as="style" rel="preload">
 */
/* //!!!!  NOT USED: Firefox not implemented !!!!
DOM_o.preloadCSS__v =
( src_s, id_s='' ) =>
{
  link_e = document.createElement( 'link' )
  if ( id_s ) link_e.id = id_s
  link_e.href = src_s
  link_e.as = 'style'
  link_e.rel = 'preload'
  link_e.addEventListener( 'load', () => link_e.rel = 'stylesheet' )
}
*/



/**
 * @param {*} src_s
 * @param {*} id_s
 * remove script node if already loaded
 * and make a reload to execute once more
 * TODO: avoid that reload
 */
DOM_o.loadJS__v =
( src_s, id_s ) =>
{
  let script_e = document.querySelector( `#${id_s}` )
  script_e && script_e.parentNode.removeChild( script_e )    //: avoid duplicate
  script_e = document.createElement( 'script' )
  if ( id_s ) script_e.id = id_s
  document.body.appendChild( script_e )
  script_e.src = src_s
}



/**
 * Load/execute a css link or js script element
 * then remove ID to disable another execution
 * more efficient than removing it
 */

DOM_o.enableAsset__v =
( id_s, callback_f ) =>
{
  const asset_e = document.querySelector( `#${id_s}` )
  if ( asset_e )
  {
    callback_f( asset_e )
    asset_e.removeAttribute( 'id' )
  }
}



/**
 * Load a stylesheet
 * @param {*} id_s 
 */
DOM_o.enableLink__v =
id_s =>
{
  DOM_o.enableAsset__v( id_s,
    link_e =>
    {
      link_e.media = 'all'
      link_e.removeAttribute( 'disabled' )
    } )
}



/**
 * Load (when load_b is true) or eval a script:
 * @param {*} id_s 
 */
DOM_o.enableScript__v =
( id_s, load_b=false ) =>
{
  DOM_o.enableAsset__v( id_s,
    var_e =>
    DOM_o.eval__v( load_b ? `DOM_o.loadJS__v( '{{ U_o.url_s }}assets/scripts/js/${id_s}.min.js', '${id_s}' )` : var_e.innerHTML ) )
}
