var PERF_o = Object.create( null )





//> create the performance script
//> show/hide the performance block
PERF_o.init__v = () =>
{
  const perf_e = document.querySelector( '[data--="performance"]' )
  if ( !perf_e.hasChildNodes() )
  {
    const link_e = document.createElement( 'link' )
    link_e.rel = 'stylesheet'
    link_e.href = '{{U_o.url_s}}assets/styles/css/performance.min.css'
    perf_e.appendChild( link_e )

    const script_e = document.createElement( 'script' )
    script_e.setAttribute( 'data--', 'script_performance' )
    //?? script_e.setAttribute( 'async', true )
    perf_e.appendChild( script_e )
    script_e.src = '{{ U_o.url_s }}assets/scripts/js/performance.min.js'
  }
  perf_e.classList.toggle( 'retract' )
}
