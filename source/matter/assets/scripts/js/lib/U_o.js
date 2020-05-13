/*
 * URL and path constants
 * Naming scheme: abrev_s
 */
const A_o = require( './A_o.js' )

const U_o =
{
  //dev_b: true,   //: development/production switch
  dev_b: false,
  url_s: null,

  DEV_s: A_o.LOCAL_s,
  PRO_s: A_o.URL_s,

  GIT_s: `https://github.com/${A_o.AUTHOR_s}/${A_o.ID_s}/`,
  GIT_SRC_s: `https://github.com/${A_o.AUTHOR_s}/${A_o.ID_s}/blob/master/`,
  GIT_ISSUES_s: `https://github.com/${A_o.AUTHOR_s}/${A_o.ID_s}/issues/`,
  //xx TWI_s: `https://twitter.com/${A_o.ID_s}/`,
  //XX RSS_s: `${A_o.URL_s}feed.xml`,
  SERVICE_PATH_s: 'service_worker.min.js',

  HOME_s:    `[Home page]: ${A_o.URL_s}`,

  NETLIFY_s: `https://www.netlify.com`,
  NODE_s :   `[Node.js]: https://nodejs.org`,

  OUTLINK_s: '{target="_blank" rel="noreferrer noopener"}',
  //??? OUTLINK_s: '{target="_blank"}',    //: --> Referrer-Policy header

}



void function ()
{
  U_o.url_s = U_o[U_o.dev_b === true ? 'DEV_s' : 'PRO_s']
  console.log( `Site URL: ${U_o.url_s}` )
} ()

module.exports = U_o
