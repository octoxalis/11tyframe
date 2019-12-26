/*
 * Site globals for installation
 */

module.exports =
{
  AUTHOR_s:     'octoxalis',                       //: github name
  EMAIL_s:      'octoxalis@gmail.com',             //: github e-mail
  ID_s:         '11tyframe',                       //: github repository
  NAME_s:       '11ty Frame',                      //: site name
  URL_s:        `https://11tyframe.netlify.com/`,  //: CDN deployer
  LOCAL_s:      'http://127.0.0.1:5500/',          //: local address and port for development
  COLLECTION_s: 'post',                            //: Eleventy tag for posts collection
  LANGUAGE_s:   'en',                              //: Site language

  description_o:                                   //: descriptions for SEO
  {
    DESCRIPT_s: '11ty Frame blog',
    GLOBAL_s:   'Eleventy,static site generator',
  },

  HUE_P_n: 0,        //: theme primary color in range [0...359]
  HUE_L_n: 50,       //: theme link color offset from primary color
  HUE_S_n: -50,      //: theme secondary color offset from primary color
  HUE_I_n: 20,       //: theme important color offset from primary color
  HUE_D_n: -20,      //: theme decorative color offset from primary color

  HUE_SET_n: 1,      //: allow visitor color palette setting

  LUM_MODE_n:     1,   //: luminosity mode: 1 (light) || -1 (dark)
  LUM_CONTRAST_n: 40,  //: luminosity contrast in range [30...49] (30 is less contrast than 49)
                       //: see https://www.w3.org/TR/WCAG20/ §1.4.1 compliance
}
