/*
 * Authentication
 * Naming scheme: ID_s
 */
const CONF_o = require( '../../../../../configure.js' )

module.exports =
{
  AUTHOR_s:      CONF_o.AUTHOR_s,
  EMAIL_s:       CONF_o.EMAIL_s,
  ID_s:          CONF_o.ID_s,
  NAME_s:        CONF_o.NAME_s,
  URL_s:         CONF_o.URL_s,
  LOCAL_s:       CONF_o.LOCAL_s,
  COLLECTION_s:  CONF_o.COLLECTION_s,
  LANGUAGE_s:    CONF_o.LANGUAGE_s,

  description_o:
  {
    DESCRIPT_s: CONF_o.description_o.DESCRIPT_s,
    GLOBAL_s:   CONF_o.description_o.GLOBAL_s,
  },

  HUE_P_n: CONF_o.HUE_P_n,    //: theme primary color

}
