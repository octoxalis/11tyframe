/*
 * COMPONENTS constants for templates
 * Naming scheme: tag[_tag]+__s
 */
const CUST_o = require( '../../../../../install.js' )

module.exports =
{
  HUE_P_n: CUST_o.HUE_P_n,
  HUE_S_n: CUST_o.HUE_S_n,
  HUE_I_n: CUST_o.HUE_I_n,
  HUE_D_n: CUST_o.HUE_D_n,
  HUE_L_n: CUST_o.HUE_L_n,
  
  h4_a__s: ( href_s, title_s ) =>
    `<h4>→ <a href="${href_s}" target="_blank" rel="noreferrer">${title_s}</a></h4>`,

}
