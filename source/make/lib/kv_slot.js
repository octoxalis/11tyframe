KV_SLOT_o = Object.create( null )


KV_SLOT_o.asset__s =
( content_s, insert_s, tag_s ) =>
{
  const kv_s = `<${tag_s} data-kv="${insert_s}"></${tag_s}>`
  return content_s.replace( '</head>', `${kv_s}</head>` )
}



module.exports =
{
  css__s: ( content_s, insert_s ) => KV_SLOT_o.asset__s( content_s, insert_s, 'style' ),


  js__s:  ( content_s, insert_s ) => KV_SLOT_o.asset__s( content_s, insert_s, 'script' ),
}