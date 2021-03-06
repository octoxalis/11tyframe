var SERVICE_o = Object.create( null )



/**
 * Service worker registration
 */

SERVICE_o.init__v = url_s =>
{
  const REGISTRATION_s = 'ServiceWorker registration'
  //-- const SUCCESS_s = 'successful'
  const FAILURE_s = 'failed'
  
  navigator.serviceWorker.register( url_s )
    .then( null,    //-- .then( registration => console.log(  `${REGISTRATION_s} ${SUCCESS_s} [scope: ${registration.scope}]` ),
      error_o => console.log( `${REGISTRATION_s} ${FAILURE_s} [error: ${error_o}]` ) )
}
