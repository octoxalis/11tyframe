var S_WORKER_o = Object.create( null )



S_WORKER_o.ID_s      = '{{A_o.ID_s}}'
S_WORKER_o.KEY_n     = 1                             //: initial cache version
S_WORKER_o.CACHE_s   = `${S_WORKER_o.ID_s}_${S_WORKER_o.KEY_n}`            //: name of the current cache
S_WORKER_o.URL_a = //: URLs of assets to immediately cache
[
  '{{U_o.url_s}}',
  '{{U_o.url_s}}index.html',
  '{{U_o.url_s}}offline.html',
  '{{U_o.url_s}}menu.html',

  '{{U_o.url_s}}service_worker.min.js',
  '{{U_o.url_s}}assets/scripts/js/lib.min.js',
  '{{U_o.url_s}}assets/scripts/js/menu.min.js',

  '{{U_o.url_s}}assets/styles/css/lib.min.css',
  '{{U_o.url_s}}assets/styles/css/menu.min.css',

  '{{U_o.url_s}}favicon.ico',
]



/**
 * Iterate thru URL_a and add cache each entry
 */
S_WORKER_o.install__v = install_o =>
{
  install_o.waitUntil(
    void async function ()
    {
      const cache_o = await caches.open( S_WORKER_o.CACHE_s )
      await cache_o.addAll( S_WORKER_o.URL_a  )
      self.skipWaiting()
    } ()
  )
}


/**
 * Remove inapplicable caches entries
 */
S_WORKER_o.activate__v = activate_o =>
{
  activate_o.waitUntil(
    void async function ()
    {
      const entry_a = await caches.keys()
      const remove_a = await entry_a.filter( entry_s => entry_s !== S_WORKER_o.CACHE_s )
      await Promise.all( remove_a.map( remove_s => caches.delete( remove_s ) ) )
      self.clients.claim()
    } ()
  )
}



/**
 * Fetch offline-1st
 * https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading
 */

S_WORKER_o.fetch__v = fetch_o =>
{
  if ( fetch_o.request.mode === 'navigate' )
  {
    try
    {
      fetch_o.respondWith(
        async function()
        {
          const url_c = new URL( fetch_o.request.url )
          url_c.search = ''
          const response_o = fetch( url_c )
          const clone_o = response_o.then( resp_o => resp_o.clone() )
          fetch_o.waitUntil(
            async function()
            {
              const cache_o = await caches.open( S_WORKER_o.CACHE_s )
              await cache_o.put( url_c, await clone_o )
            }() )
          return ( await caches.match( url_c ) ) || response_o
        } () )
    }
    catch ( error_o )
    {
      const cache_o = caches.open( S_WORKER_o.CACHE_s )
      return cache_o && cache_o.match( new Request( `{{U_o.url_s}}offline.html` ) )  //: We don't have a cached version, display offline page
    }
  }
}



/**
 * Initialize
 */
; [ 'install',
    'activate',
    'fetch',
  ].forEach( action_s => self.addEventListener( action_s, action_o => S_WORKER_o[`${action_s}__v`]( action_o ) ) )
