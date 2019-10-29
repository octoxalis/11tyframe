---js
{
  date:      `2019-11-01`,
  layout:    `frame.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  eleventyExcludeFromCollections: false,
  no_comments: true,

  title_s:    `Welcome`,
  subtitle_s: `11ty Frame blog`,
  abstract_s: `A blog powered by Eleventy`,
  author_s:   `Me`,
}
---
[comment]: # (======== Post ========)
# Welcome to {{A_o.NAME_s}}

A site powered by [Eleventy]{{U_o.OUTLINK_s}} static site generator.{ data--="page_intro" }

{% _anchor %}
## It's Eleventy time!
{% end_anchor %}


Eleventy (11ty for short) is a static site generator rapidly gaining popularity among JAMstack developers. Its learning curve is short and it offers the largest choice of templating languages compared with others popular SSG.


11ty can be used without any configuration
{% _short_note %}
it is [zero-config]{{U_o.OUTLINK_s}} out of the box!
{% end_short_note %}
, but its power comes from the fact that it is backed by the huge [Node.js]{{U_o.OUTLINK_s}} ecosystem. Therefore, when building your static site with 11ty, you can do anything Node is able to do.

{% _anchor %}
## A frame for your blog
{% end_anchor %}


{{A_o.NAME_s}} design and styles have been carefully developed to give you a nice and simple presentation while offering advanced capabilities:
+ responsive layout with *fluid typography*;
+ smart inline notes;
+ full Markdown content, styling, linking, code blocks, etc.;
+ Atom RSS feed;
+ sitemap for search engines;
+ smart commenting system using your own Github repository issues.

{ data--="ulist" }


This page and the **[install]** page give you the instructions to customize your new blog and are supposed to be replaced as soon as you have fresh matter for your blog:


**That's all Folks!**


[comment]: # (======== Links ========)

[install]:     ./install.html
[Eleventy]:    https://11ty.io
[zero-config]: https://www.11ty.io/docs/resources/#zero-config
[utteranc.es]: https://github.com/utterance/utterances
[Node.js]:     https://nodejs.org
[formula]:     https://www.smashingmagazine.com/2016/05/fluid-typography/#comments-fluid-typography
