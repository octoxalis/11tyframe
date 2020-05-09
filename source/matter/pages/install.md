---js
{
  date:      `2019-11-01`,
  layout:    `frame.njk`,
  permalink: `posts/install.html`,
  tags:      [ `post` ],

  eleventyExcludeFromCollections: false,

  rank_n:     1,
  title_s:    `Install 11ty Frame`,
  subtitle_s: `How to install your 11ty Frame blog`,
  abstract_s: `Follow these instructions`,
  author_s:   `Me`,

  //XX no_comment: true,
  sitemap_b: true,
}
---
[comment]: # (======== Post ========)
# Installing {{A_o.NAME_s}} blog

You are just a few lines away from your blog.{ data--="page_intro" }

{% _anchor %}
## Let's create a Github repository
{% end_anchor %}

<slot-slice>
<slot-css prism_css/>
<slot-css lib_prism/>
<slot-js prism_js/>

Your first action to create a {{A_o.NAME_s}} site is to fork {{A_o.ID_s}} [repository] inside the directory where you want to develop your new site
{% _note_txt %}
 on your local computer
{% end_note_txt %}
, then
create a Github repository with the same directory name
{% _note_txt %}
for instance, the Github repository for {{A_o.NAME_s}} is {{A_o.ID_s}}.
{% end_note_txt %}
.


Install [Eleventy] and the required Node packages locally, as they appear in your `package.json` file

{% _code_block %}
    title_s: 'package.json',
    lang_s: 'json',
[//]:#(_code_block)
{% raw %}
  "dependencies": {
    "html-minifier": "^4.0.0",
    "clean-css": "^4.2.1",
    "uglify-es": "^3.3.9",
    "klaw-sync": "^6.0.0",
    "markdown-it": "^9.1.0",
    "markdown-it-attrs": "^3.0.1",
    "markdown-it-deflist": "^2.0.3",
    "markdown-it-include": "^1.1.0",
    "markdown-it-link-attributes": "^2.1.0",
    "nunjucks": "^3.2.0"
  },
{% endraw %}
{% end_code_block %}

</slot-slice>

{% _anchor %}
## Let's have a post!
{% end_anchor %}

<slot-slice>
<slot-css prism_css/>
<slot-css lib_prism/>
<slot-js prism_js/>

Once installed and deployed
{% _note_txt %}
Using Netlify is the easiest way, but any alternative is as simple.
{% end_note_txt %}
, you have to modify the entries found in the `configure.js` file located at the root of your source directory
{% _note_txt %}
the `AUTHOR_s` and `EMAIL_s` properties are slightly different in the `configure.js` file, but it's because the {{A_o.NAME_s}} demo site requires real initial values.
{% end_note_txt %}
.


{% _code_block %}
    title_s: 'source/configure.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
AUTHOR_s     : 'yourname',                        //: Your github name
EMAIL_s      : 'yourname@yourmail.com',           //: Your github e-mail
ID_s         : '11tyframe',                       //: Your github repository
NAME_s       : '11ty Frame',                      //: Your site name
URL_s        : `https://11tyframe.netlify.com/`,  //: Your CDN site address
LOCAL_s      : 'http://127.0.0.1:5500/',          //: Your local address and port for development
COLLECTION_s : 'post',                            //: The Eleventy tag for your posts collection
LANGUAGE_s   : 'en',                              //: Site language

description_o:                                    //: descriptions for SEO
{
  DESCRIPT_s: '11ty Frame blog',
  GLOBAL_s:   'Eleventy,static site generator',
},
{% endraw %}
{% end_code_block %}


Once you have completed this step, you just have to rebuilt your site with this command:
{% _note_txt %}
from your {{A_o.ID_s}} `source` directory.
{% end_note_txt %}


npx eleventy --config=make/11ty/make.js
{data--="example"}



Then, begin to write your first posts
{% _note_txt %}
probably replacing the `index.md` and `install.md` files in the `matter/pages` directory...
{% end_note_txt %}
! For thurther help, please refer to the **[11tyTips]{{U_o.OUTLINK_s}}** site which is the model of your fresh new site.

</slot-slice>

{% _anchor %}
## Commenting or not commenting?
{% end_anchor %}

<slot-slice>
<slot-css prism_css/>
<slot-css lib_prism/>
<slot-js prism_js/>

If you want to have comments on some or all of your blog pages, you have to configure {{A_o.NAME_s}} commenting system: [utteranc.es]{{U_o.OUTLINK_s}}. All you have to do is to follow utterances site [instructions]{{U_o.OUTLINK_s}}.


If you don't want to have comments on any page, just add a property `no_comments` in its frontmatter section: here is what this `install` page source does, just _commenting out_ (sic) the `no_comments` property.


{% _code_block %}
    title_s: 'source/matter/pages/install.md',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
---js
{
  date:      `2019-11-01`,
  layout:    `frame.njk`,
  permalink: `install.html`,
  tags:      [ `post` ],

  eleventyExcludeFromCollections: false,
  no_comments: true,    //: there will be no comments for this page!

  title_s:    `Install 11ty Frame`,
  subtitle_s: `How to install your 11ty Frame blog`,
  abstract_s: `Follow these instructions`,
  author_s:   `Me`,
}
---
{% endraw %}
{% end_code_block %}

</slot-slice>

{% _anchor %}
## Removing {{A_o.NAME_s}} demo pages 
{% end_anchor %}

<slot-slice>

Of course, you can remove {{A_o.NAME_s}} demo pages from your personal site
{% _note_txt %}
you should first have another `index` and a `post` tagged page of your own, otherwise you will get an error when building your site.
{% end_note_txt %}
, but if you want to keep them in your source directory
{% _note_txt %}
for instance to  have a handy reference
{% end_note_txt %}
, without building them in your site, you just have to change two lines in their frontmatter section, replacing ex.1 code by ex.2 code:

permalink: 'install.html',<br/>
tags:      [ 'post' ],
{data--="example"}

permalink: false,<br/>
tags:      [],
{data--="example"}

</slot-slice>

{% _anchor %}
## Configure your CDN
{% end_anchor %}

<slot-slice>

Now you can create a new site at Netlify or at your usual CDN
{% _note_txt %}
for Netlify follow Netlify [page]{{U_o.OUTLINK_s}} instructions.
{% end_note_txt %}
and give it the name of your Github repository.

**There you are!** You're both an Eleventy and {{A_o.NAME_s}} user...

</slot-slice>

[comment]: # (======== Links ========)

[Eleventy]: https://github.com/11ty/eleventy/
[repository]: https://github.com/octoxalis/11tyframe
[11tyTips]: https://11tytips.netlify.com
[utteranc.es]: https://github.com/utterance/utterances
[instructions]: https://utteranc.es
[page]: https://www.netlify.com