/**
 * Unlike most Service Workers, this one always attempts to download assets from the network.
 * Only when network access fails do we fallback to using the cache. 
 * When a request succeeds we always update the cache with the new version.
 * If a request fails and the result isn't in the cache then we display an offline page.
 */
var S_WORKER_o = Object.create( null )



S_WORKER_o.ID_s      = '{{A_o.ID_s}}'
S_WORKER_o.KEY_n     = 1                             //: initial cache version
S_WORKER_o.CACHE_s   = `${S_WORKER_o.ID_s}_${S_WORKER_o.KEY_n}`            //: name of the current cache
S_WORKER_o.URL_a = //: URLs of assets to immediately cache
[
  '{{U_o.url_s}}',
  '{{U_o.url_s}}index.html',
  '{{U_o.url_s}}offline.html',
  '{{U_o.url_s}}assets/scripts/js/service_worker.min.js',
  '{{U_o.url_s}}assets/scripts/js/lib.min.js',
  '{{U_o.url_s}}assets/styles/css/lib.min.css',
  '{{U_o.url_s}}favicon.ico',
]



/**
 * Iterate thru URL_a and add cache each entry
 */
S_WORKER_o.install__v = install_o =>
{
  install_o.waitUntil( caches.open( S_WORKER_o.CACHE_s )
    .then( cache_o => cache_o.addAll( S_WORKER_o.URL_a  ) )
    .then( self.skipWaiting() ) )
}



/**
 * Remove inapplicable caches entries
 */
S_WORKER_o.activate__v = activate_o =>
{
  activate_o.waitUntil( caches.keys()
    .then( entry_a => entry_a.filter( entry_s => entry_s !== S_WORKER_o.CACHE_s ) )
    .then( remove_a => Promise.all( remove_a.map( remove_s => caches.delete( remove_s ) ) ) )
    .then( () => self.clients.claim() ) )
}



/**
 * Always try to download from server first
 */
S_WORKER_o.fetch__v = fetch_o =>
{
  fetch_o.respondWith( fetch( fetch_o.request )
      .then( response_o =>
      {
        cache__v( fetch_o.request, response_o )   //: download is successful: cache the result...
        return response_o.clone()                 //... and display it
      } )
      .catch( error_o => S_WORKER_o.cache__o( error_o ) )    //: error_o means network fail (offline...)
  )
}




/**
 * Try to fetch a cache version if network access issues
 */
S_WORKER_o.cache__o = fetch_o =>
{
  return caches.match( fetch_o.request )
    .then( response_o =>
    {
      return response_o ||        //: We have a cached version, display it
        caches.open( S_WORKER_o.CACHE_s )    //: We don't have a cached version, display offline page
          .then( cache_o => cache_o.match( new Request( `{{U_o.url_s}}offline.html` ) ) )
    } )
}



/**
 * Put successful Fetch in cache
 */
S_WORKER_o.cache__v = ( request_o, response_o ) =>
{
  caches.open( S_WORKER_o.CACHE_s )
    .then( cache_o => cache_o.put( request_o, response_o ) )
}


/**
 * Initialize
 */
; [ 'install',
    'activate',
    'fetch'
  ].forEach( action_s => self.addEventListener( action_s, action_o => S_WORKER_o[`${action_s}__v`]( action_o ) ) )
