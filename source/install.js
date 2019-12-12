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
}
