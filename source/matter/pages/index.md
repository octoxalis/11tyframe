---js
{
  date:      `2019-11-01`,
  layout:    `frame.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Welcome`,
  subtitle_s: `11ty Frame blog`,
  abstract_s: `A blog powered by Eleventy`,
  author_s:   `Me`,

  gh_issue_n: 1,
}
---
[comment]: # (======== Post ========)
# Welcome to {{A_o.NAME_s}}

A site powered by [Eleventy]{{U_o.OUTLINK_s}} static site generator.{ data--="page_intro" }

{% _anchor %}
## It's Eleventy time!
{% end_anchor %}

<slot-slice>

Eleventy (11ty for short) is a static site generator rapidly gaining popularity among JAMstack developers. Its learning curve is short and it offers the largest choice of templating languages compared with others popular SSG.


11ty can be used without any configuration
{% _note_txt %}
it is [zero-config]{{U_o.OUTLINK_s}} out of the box!
{% end_note_txt %}
, but its power comes from the fact that it is backed by the huge [Node.js]{{U_o.OUTLINK_s}} ecosystem. Therefore, when building your static site with 11ty, you can do anything Node is able to do.

</slot-slice>

{% _anchor %}
## A frame for your blog
{% end_anchor %}

<slot-slice>

{{A_o.NAME_s}} design and styles have been carefully developed to give you a nice and simple presentation while offering advanced capabilities:
+ ContentOnRequest site architecture
{% _note_txt %}
see [CoRsa site]{{U_o.OUTLINK_s}}
{% end_note_txt %}

+ Very high speed loading
{% _note_img [ 'Hi Tux', 'Linux Tux' ] %}
![Hi Tux][1PX]{data-isrc="{{U_o.url_s}}assets/media/phoca_thumb.webp" data-size="50%"}
{% end_note_img %}

+ Clean UI with:
  - responsive design and fluid typography
  - one click smart theming (instantly change colors and light mode)
  - scrolling progress bar
  - navigation links info
  - code blocks hilighting ([Prism]{{U_o.OUTLINK_s}} module), etc.
{ data--="ulist" }
+  On-request image loading
{% _note_img [ 'Hi Tux', 'Linux Tux' ] %}
![Hi Tux][1PX]{data-isrc="{{U_o.url_s}}assets/media/phoca_thumb.webp" data-size="50%"}
{% end_note_img %}

+ Full Markdown content, styling, linking, etc.
+ Simple commenting system redirecting to your own Github repository issues
+ Extensive **Performance API** metrics report for loading process optimisation
{% _note_txt %}
try it by a clicking the [bottom page icon](#perf_header)!
{% end_note_txt %}

+ Service worker for persistence
+ IndexedDB API to store anything you want
+ XML sitemap for SEO
+ HTTP headers control
+ Atom RSS feed

{ data--="ulist" }

This page and the **[install]** page give you the instructions to customize your new blog and are supposed to be replaced as soon as you have fresh matter for your blog.


_That's all Folks!_
</slot-slice>

[comment]: # (======== Links ========)

[install]:     ./posts/install.html
[CoRsa site]:  https://corsa.netlify.app
[Eleventy]:    https://11ty.io
[zero-config]: https://www.11ty.io/docs/resources/#zero-config
[Node.js]:     https://nodejs.org
[Prism]:       https://prismjs.com

[1PX]: {{ F_o.img1px__s() }} "Hi Tux!"
