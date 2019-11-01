/*
 * Authentication
 * Naming scheme: ID_s
 */
const CUST_o = require( '../../../../../install.js' )

module.exports =
{
  AUTHOR_s:     CUST_o.AUTHOR_s,
  EMAIL_s:      CUST_o.EMAIL_s,
  ID_s:         CUST_o.ID_s,
  NAME_s:       CUST_o.NAME_s,
  URL_s:        CUST_o.URL_s,
  LOCAL_s:      CUST_o.LOCAL_s,
  COLLECTION_s: CUST_o.COLLECTION_s,

  description_o:
  {
    DESCRIPT_s: CUST_o.description_o.DESCRIPT_s,
    GLOBAL_s:   CUST_o.description_o.GLOBAL_s,
  },

}
