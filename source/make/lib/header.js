module.exports =
{
  insertCSS__s: ( content_s, data_o ) =>
  {
    const dataKv_s = `key=value:key=value with space`    //... compute from content_s
    const kv_s = `<style data-kv="${dataKv_s}"></style>`
    return content_s.replace( '</head>', `${kv_s}</head>` )
  },


  insertJS__s: ( content_s, data_o ) =>
  {
    const dataKv_s = `key=value with space:key=value`    //... compute from content_s
    const kv_s = `<script data-kv="${dataKv_s}"></script>`
    return content_s.replace( '</head>', `${kv_s}</head>` )
  },
}