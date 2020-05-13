---js
{
  date:      `2019-11-01`,
  layout:    `frame.njk`,
  permalink: `posts/customize.html`,
  tags:      [ `post` ],

  eleventyExcludeFromCollections: false,

  rank_n:     2,
  title_s:    `Customize your new site`,
  subtitle_s: `Modify your new site skin`,
  abstract_s: `Easily change colors and luminosity mode (light or dark)`,
  author_s:   `Me`,

  gh_issue_n: 3,
}
---
[comment]: # (======== Post ========)
# Change your blog skin

Some options let you modify the skin of your blog.{ data--="page_intro" }

{% _anchor %}
## Configure according to your preferences
{% end_anchor %}

<slot-slice>
<slot-css prism_css/>
<slot-css prism_ui/>
<slot-js prism_js/>

At the root of the source directory there is a `configure.js` file that you can tweak as you see fit.


{% _code_block %}
    title_s: 'source/configures.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
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

  LUM_MODE_n:     1,   //: luminosity mode: 1 (light) || -1 (dark)
  LUM_CONTRAST_n: 40,  //: luminosity contrast in range [30...49] (30 is less contrast than 49)
                       //: see https://www.w3.org/TR/WCAG20/ §1.4.1 compliance
}
{% endraw %}
{% end_code_block %}


The properties of this configuration file are self-documenting but some of them need a few explanations, notably those properties whose names begin by _HUE_ and _LUM_.

All {{A_o.NAME_s}} colors are defined by CSS custom properties and the _HUE_ properties define the variations of these colors:
+ **P** stands for primary color;
+ **L** links color;
+ **S** secondary color;
+ **I** important color
{% _note_txt %}
something outstanding in your content
{% end_note_txt %}

+ **D** decorative color.

{ data--="ulist" }

These properties values are numbers, positive and negative, specifying the variation around the _primary_ color (`HUE_P_n`) value that you declare.
For instance, if you set:

HUE_P_n: 153,<br/>
HUE_L_n: 50,
{data--="example"}

this declaration will yield a link color of `203` for anchors
{% _note_txt %}
`153 + 50 = 203`
{% end_note_txt %}
. Similarly, the _secondary_ color (`HUE_S_n`) will be `103`
{% _note_txt %}
`153 - 50 = 103`
{% end_note_txt %}
but you could have well define that property as:

HUE_S_n: -30,
{data--="example"}

to obtain `123` as _secondary_ color hue
{% _note_txt %}
`153 - 30 = 123`
{% end_note_txt %}
. Nothing requires you to have simetrical values for your color variations, you only have to experiment some combinations to get what you consider the optimal result.

All variations once defined, any visitor of your site will be able to change the base color hue with a single click over the page header, selecting one of the 360 different hues available in the HSL color system used by {{A_o.NAME_s}}. Nevertheless, if you want to prevent the possiblity to change this base color hue, you can do it by setting the `HUE_SET_n` to `0` in the `configure.js` file.

</slot-slice>

{% _anchor %}
## Luminosity variations AKA dark and light modes
{% end_anchor %}

<slot-slice>

Having dark (and light) mode is trendy: {{A_o.NAME_s}} has it, automatically and akin to your color palette!

And even more: you can define the level of contrast between dark and light mode thanks to the `LUM_CONTRAST_n` property. It defaults to `40` and should be kept between `30` and `49` for Web Content Accessibility Guidelines ([WCAG]) 2.0 conformance
{% _note_txt %}
under 30 you won't a get a score of 100 when auditing your blog with _Lighthouse_ in Chrome DevTools [accessibility panel]{{U_o.OUTLINK_s}}.
{% end_note_txt %}
.

</slot-slice>

[comment]: # (======== Links ========)

[WCAG]: https://www.w3.org/TR/WCAG20/
[accessibility panel]: https://developers.google.com/web/tools/chrome-devtools/accessibility/reference