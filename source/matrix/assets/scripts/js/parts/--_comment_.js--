var COMMENT_o = Object.create( null )



//> create comment script (utteranc.es)
//> show/hide comment block
COMMENT_o.init__v = () =>
{
  const comment_e = document.querySelector( '[data--="comment"]' )
  if ( !comment_e.hasChildNodes() )
  {
    const script_e = document.createElement( 'script' )
    script_e.setAttribute( 'data--', 'script_comment' )
    script_e.setAttribute( 'repo', '{{ A_o.AUTHOR_s }}/{{ A_o.ID_s.toLowerCase() }}' )
    script_e.setAttribute( 'issue-term', 't' )
    script_e.setAttribute( 'theme', 'photon-dark' )
    script_e.setAttribute( 'crossorigin', 'anonymous' )
    script_e.setAttribute( 'async', true )
    script_e.src = 'https://utteranc.es/client.js'
    comment_e.appendChild( script_e )
  }
  comment_e.classList.toggle( 'retract' )
}
